package org.app.backend.service;

import org.app.backend.entity.Appointment;
import org.app.backend.entity.Doctor;
import org.app.backend.entity.User;
import org.app.backend.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private UserService userService;


    public List<Appointment> getUserAppointments(User user) {
        return appointmentRepository.findByUser(user);
    }


    public List<Appointment> getUserAppointments(Long userId) {
        System.out.println("🔍 Finding appointments for user ID: " + userId);
        Optional<User> user = userService.findById(userId);
        if (user.isPresent()) {
            List<Appointment> appointments = appointmentRepository.findByUser(user.get());
            System.out.println("✅ Found " + appointments.size() + " appointments for user ID: " + userId);
            return appointments;
        } else {
            System.out.println("❌ User not found with ID: " + userId);
            return List.of();
        }
    }


    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }


    public List<Appointment> getDoctorAppointments(Long doctorId) {
        return appointmentRepository.findByDoctorId(doctorId);
    }



    public Appointment save(Appointment appointment) {
        System.out.println("💾 Saving appointment for user: " + appointment.getUser().getId());
        Appointment savedAppointment = appointmentRepository.save(appointment);
        System.out.println("✅ Appointment saved with ID: " + savedAppointment.getId());
        return savedAppointment;
    }

    public Appointment createAppointment(User user, Doctor doctor, Appointment appointment) {
        appointment.setUser(user);
        appointment.setDoctor(doctor);
        appointment.setStatus("SCHEDULED");
        return appointmentRepository.save(appointment);
    }

    public Optional<Appointment> findById(Long id) {
        return appointmentRepository.findById(id);
    }

    // Cancel appointment
    public Appointment cancelAppointment(Long id) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if (appointment.isPresent()) {
            appointment.get().setStatus("CANCELLED");
            return appointmentRepository.save(appointment.get());
        }
        throw new RuntimeException("Appointment not found with id: " + id);
    }

    // Delete appointment
    public void deleteAppointment(Long id) {
        appointmentRepository.deleteById(id);
    }
}