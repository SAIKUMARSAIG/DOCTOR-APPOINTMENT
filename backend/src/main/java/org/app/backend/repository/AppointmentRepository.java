package org.app.backend.repository;

import org.app.backend.entity.Appointment;
import org.app.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // Find by User object
    List<Appointment> findByUser(User user);

    // Find by user ID
    List<Appointment> findByUserId(Long userId);

    // Find by doctor ID
    List<Appointment> findByDoctorId(Long doctorId);

    // Find by status
    List<Appointment> findByStatus(String status);
}