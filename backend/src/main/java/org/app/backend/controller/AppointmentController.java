package org.app.backend.controller;

import org.app.backend.config.UserPrincipal;
import org.app.backend.dto.AppointmentRequest;
import org.app.backend.entity.Appointment;
import org.app.backend.entity.Doctor;
import org.app.backend.entity.User;
import org.app.backend.service.AppointmentService;
import org.app.backend.service.DoctorService;
import org.app.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private UserService userService;

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/public")
    public ResponseEntity<?> createPublicAppointment(@RequestBody AppointmentRequest appointmentRequest) {
        try {
            System.out.println("📅 PUBLIC ENDPOINT: Creating appointment: " + appointmentRequest);


            Long doctorId = Long.parseLong(appointmentRequest.getDoctorId());
            Optional<Doctor> doctor = doctorService.getDoctorById(doctorId);
            Optional<User> defaultUser = userService.findById(1L);

            if (defaultUser.isPresent() && doctor.isPresent()) {
                Appointment appointment = new Appointment();
                appointment.setUser(defaultUser.get());
                appointment.setDoctor(doctor.get());
                appointment.setAppointmentDateTime(appointmentRequest.getAppointmentDateTime());
                appointment.setNotes(appointmentRequest.getNotes());
                appointment.setStatus("SCHEDULED");

                Appointment savedAppointment = appointmentService.save(appointment);
                System.out.println("✅ PUBLIC ENDPOINT: Appointment created: " + savedAppointment.getId());

                // Return proper response format
                Map<String, Object> response = new HashMap<>();
                response.put("success", true);
                response.put("message", "Appointment booked successfully");
                response.put("appointment", createAppointmentResponse(savedAppointment));

                return ResponseEntity.ok(response);
            } else {
                System.out.println("❌ PUBLIC ENDPOINT: Default user or doctor not found");
                Map<String, Object> errorResponse = new HashMap<>();
                errorResponse.put("success", false);
                errorResponse.put("error", "Invalid doctor or default user not found");
                return ResponseEntity.badRequest().body(errorResponse);
            }
        } catch (NumberFormatException e) {
            System.out.println("❌ PUBLIC ENDPOINT: Invalid doctor ID format: " + appointmentRequest.getDoctorId());
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("error", "Invalid doctor ID format");
            return ResponseEntity.badRequest().body(errorResponse);
        } catch (Exception e) {
            System.out.println("❌ PUBLIC ENDPOINT: Error creating appointment: " + e.getMessage());
            e.printStackTrace();
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("error", "Failed to create appointment: " + e.getMessage());
            return ResponseEntity.status(500).body(errorResponse);
        }
    }

    // Add this helper method to create proper response structure
    private Map<String, Object> createAppointmentResponse(Appointment appointment) {
        Map<String, Object> response = new HashMap<>();
        response.put("id", appointment.getId());
        response.put("appointmentDateTime", appointment.getAppointmentDateTime());
        response.put("status", appointment.getStatus());
        response.put("notes", appointment.getNotes());
        response.put("createdAt", appointment.getCreatedAt());

        // Add doctor info
        if (appointment.getDoctor() != null) {
            Map<String, Object> doctorInfo = new HashMap<>();
            doctorInfo.put("id", appointment.getDoctor().getId());
            doctorInfo.put("name", appointment.getDoctor().getName());
            doctorInfo.put("speciality", appointment.getDoctor().getSpeciality());
            doctorInfo.put("degree", appointment.getDoctor().getDegree());
            doctorInfo.put("fees", appointment.getDoctor().getFees());
            doctorInfo.put("image", appointment.getDoctor().getImage());
            response.put("doctor", doctorInfo);
        }

        // Add user info if needed
        if (appointment.getUser() != null) {
            Map<String, Object> userInfo = new HashMap<>();
            userInfo.put("id", appointment.getUser().getId());
            userInfo.put("name", appointment.getUser().getName());
            userInfo.put("email", appointment.getUser().getEmail());
            response.put("user", userInfo);
        }

        return response;
    }

    @GetMapping("/my-appointments")
    public ResponseEntity<List<Appointment>> getUserAppointments(Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        Optional<User> user = userService.findById(userPrincipal.getId());

        if (user.isPresent()) {
            List<Appointment> appointments = appointmentService.getUserAppointments(user.get());
            return ResponseEntity.ok(appointments);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> createAppointment(@RequestBody AppointmentRequest appointmentRequest,
                                               Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        Optional<User> user = userService.findById(userPrincipal.getId());

        try {
            // Convert String doctorId to Long
            Long doctorId = Long.parseLong(appointmentRequest.getDoctorId());
            Optional<Doctor> doctor = doctorService.getDoctorById(doctorId);

            if (user.isPresent() && doctor.isPresent()) {
                Appointment appointment = new Appointment();
                appointment.setAppointmentDateTime(appointmentRequest.getAppointmentDateTime());
                appointment.setNotes(appointmentRequest.getNotes());

                Appointment savedAppointment = appointmentService.createAppointment(user.get(), doctor.get(), appointment);
                return ResponseEntity.ok(savedAppointment);
            }
            return ResponseEntity.badRequest().body("Invalid user or doctor");
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().body("Invalid doctor ID format");
        }
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<?> cancelAppointment(@PathVariable Long id, Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        Optional<Appointment> appointment = appointmentService.findById(id);

        if (appointment.isPresent() &&
                appointment.get().getUser().getId().equals(userPrincipal.getId())) {
            appointment.get().setStatus("CANCELLED");
            appointmentService.save(appointment.get());
            return ResponseEntity.ok("Appointment cancelled successfully");
        }
        return ResponseEntity.badRequest().body("Appointment not found or access denied");
    }

    @GetMapping("/doctor/{doctorId}")
    public ResponseEntity<List<Appointment>> getDoctorAppointments(@PathVariable Long doctorId) {
        List<Appointment> appointments = appointmentService.getDoctorAppointments(doctorId);
        return ResponseEntity.ok(appointments);
    }

    @GetMapping
    public ResponseEntity<List<Appointment>> getAllAppointments() {
        List<Appointment> appointments = appointmentService.getAllAppointments();
        return ResponseEntity.ok(appointments);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAppointment(@PathVariable Long id) {
        try {
            appointmentService.deleteAppointment(id);
            return ResponseEntity.ok("Appointment deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to delete appointment: " + e.getMessage());
        }
    }





    // In your AppointmentController.java - ADD this method
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserAppointmentsByUserId(@PathVariable Long userId) {
        try {
            System.out.println("📅 GET /api/appointments/user/" + userId);

            List<Appointment> appointments = appointmentService.getUserAppointments(userId);
            System.out.println("✅ Found " + appointments.size() + " appointments for user " + userId);

            // Create proper response structure that matches frontend expectations
            List<Map<String, Object>> appointmentResponses = appointments.stream()
                    .map(this::createAppointmentResponse)
                    .collect(Collectors.toList());

            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("appointments", appointmentResponses);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.out.println("❌ ERROR fetching user appointments: " + e.getMessage());
            e.printStackTrace();

            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("error", "Failed to fetch appointments");
            return ResponseEntity.status(500).body(errorResponse);
        }
    }

    
//    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Appointment>> getUserAppointments(@PathVariable Long userId) {
        try {
            System.out.println("📅 GET /api/appointments/user/" + userId);

            List<Appointment> appointments = appointmentService.getUserAppointments(userId);
            System.out.println("✅ Found " + appointments.size() + " appointments for user " + userId);

            // Debug each appointment
            for (Appointment appointment : appointments) {
                System.out.println("📋 Appointment: ID=" + appointment.getId() +
                        ", Doctor=" + (appointment.getDoctor() != null ? appointment.getDoctor().getName() : "null") +
                        ", Date=" + appointment.getAppointmentDateTime() +
                        ", Status=" + appointment.getStatus());
            }

            return ResponseEntity.ok(appointments);
        } catch (Exception e) {
            System.out.println("❌ ERROR fetching user appointments: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(500).build();
        }
    }








}








