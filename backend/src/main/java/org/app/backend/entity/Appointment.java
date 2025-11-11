//package org.app.backend.entity;
//
//
//import jakarta.persistence.*;
//import java.time.LocalDateTime;
//
//@Entity
//@Table(name = "appointments")
//public class Appointment {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    private User user;
//
//    @ManyToOne
//    @JoinColumn(name = "doctor_id", nullable = false)
//    private Doctor doctor;
//
//    @Column(nullable = false)
//    private LocalDateTime appointmentDateTime;
//
//    private String status = "SCHEDULED"; // SCHEDULED, COMPLETED, CANCELLED
//
//    private String notes;
//
//    @Column(name = "created_at")
//    private LocalDateTime createdAt;
//
//    // Constructors
//    public Appointment() {
//        this.createdAt = LocalDateTime.now();
//    }
//
//    public Appointment(User user, Doctor doctor, LocalDateTime appointmentDateTime) {
//        this();
//        this.user = user;
//        this.doctor = doctor;
//        this.appointmentDateTime = appointmentDateTime;
//    }
//
//    // Getters and Setters
//    public Long getId() { return id; }
//    public void setId(Long id) { this.id = id; }
//
//    public User getUser() { return user; }
//    public void setUser(User user) { this.user = user; }
//
//    public Doctor getDoctor() { return doctor; }
//    public void setDoctor(Doctor doctor) { this.doctor = doctor; }
//
//    public LocalDateTime getAppointmentDateTime() { return appointmentDateTime; }
//    public void setAppointmentDateTime(LocalDateTime appointmentDateTime) { this.appointmentDateTime = appointmentDateTime; }
//
//    public String getStatus() { return status; }
//    public void setStatus(String status) { this.status = status; }
//
//    public String getNotes() { return notes; }
//    public void setNotes(String notes) { this.notes = notes; }
//
//    public LocalDateTime getCreatedAt() { return createdAt; }
//    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
//}









package org.app.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "appointments")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "doctor_id", nullable = false)
    private Doctor doctor;

    @Column(nullable = false)
    private LocalDateTime appointmentDateTime;

    private String status = "SCHEDULED"; // SCHEDULED, COMPLETED, CANCELLED

    private String notes;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    // Constructors
    public Appointment() {
        this.createdAt = LocalDateTime.now();
    }

    public Appointment(User user, Doctor doctor, LocalDateTime appointmentDateTime) {
        this();
        this.user = user;
        this.doctor = doctor;
        this.appointmentDateTime = appointmentDateTime;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Doctor getDoctor() { return doctor; }
    public void setDoctor(Doctor doctor) { this.doctor = doctor; }

    public LocalDateTime getAppointmentDateTime() { return appointmentDateTime; }
    public void setAppointmentDateTime(LocalDateTime appointmentDateTime) { this.appointmentDateTime = appointmentDateTime; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}