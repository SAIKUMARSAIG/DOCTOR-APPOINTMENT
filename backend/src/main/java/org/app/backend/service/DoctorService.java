package org.app.backend.service;

import org.app.backend.entity.Doctor;
import org.app.backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public List<Doctor> getAllDoctors() {
        return doctorRepository.findAll();
    }

    public Optional<Doctor> getDoctorById(Long id) {
        return doctorRepository.findById(id);
    }

    public List<Doctor> getDoctorsBySpeciality(String speciality) {
        return doctorRepository.findBySpeciality(speciality);
    }

    public List<Doctor> getTopDoctors() {
        return doctorRepository.findTop10ByOrderByIdAsc();
    }

    // ADD THESE METHODS:
    public Doctor saveDoctor(Doctor doctor) {
        System.out.println("💾 Saving doctor: " + doctor.getName());
        Doctor savedDoctor = doctorRepository.save(doctor);
        System.out.println("✅ Doctor saved with ID: " + savedDoctor.getId());
        return savedDoctor;
    }

    public Doctor updateDoctor(Long id, Doctor doctorDetails) {
        System.out.println("🔄 Updating doctor with ID: " + id);

        Optional<Doctor> optionalDoctor = doctorRepository.findById(id);
        if (optionalDoctor.isPresent()) {
            Doctor existingDoctor = optionalDoctor.get();

            // Update fields
            existingDoctor.setName(doctorDetails.getName());
            existingDoctor.setSpeciality(doctorDetails.getSpeciality());
            existingDoctor.setDegree(doctorDetails.getDegree());
            existingDoctor.setExperience(doctorDetails.getExperience());
            existingDoctor.setFees(doctorDetails.getFees());
            existingDoctor.setAbout(doctorDetails.getAbout());
            existingDoctor.setImage(doctorDetails.getImage());
            existingDoctor.setVerified(doctorDetails.getVerified());

            Doctor updatedDoctor = doctorRepository.save(existingDoctor);
            System.out.println("✅ Doctor updated: " + updatedDoctor.getName());
            return updatedDoctor;
        } else {
            System.out.println("❌ Doctor not found with ID: " + id);
            throw new RuntimeException("Doctor not found with id: " + id);
        }
    }

    public void deleteDoctor(Long id) {
        System.out.println("🗑️ Deleting doctor with ID: " + id);

        if (doctorRepository.existsById(id)) {
            doctorRepository.deleteById(id);
            System.out.println("✅ Doctor deleted successfully");
        } else {
            System.out.println("❌ Doctor not found with ID: " + id);
            throw new RuntimeException("Doctor not found with id: " + id);
        }
    }

    // Keep existing method for compatibility
    public Doctor save(Doctor doctor) {
        return saveDoctor(doctor);
    }
}