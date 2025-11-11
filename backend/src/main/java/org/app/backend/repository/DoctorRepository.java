package org.app.backend.repository;

import org.app.backend.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    List<Doctor> findBySpeciality(String speciality);

    List<Doctor> findTop10ByOrderByIdAsc();


    List<Doctor> findByNameContainingIgnoreCase(String name);


    List<Doctor> findByVerifiedTrue();
}