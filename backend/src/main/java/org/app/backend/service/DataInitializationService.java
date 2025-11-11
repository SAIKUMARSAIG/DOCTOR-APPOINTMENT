package org.app.backend.service;



import org.app.backend.entity.Address;
import org.app.backend.entity.Doctor;
import org.app.backend.repository.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializationService implements CommandLineRunner {

    @Autowired
    private DoctorRepository doctorRepository;

    @Override
    public void run(String... args) throws Exception {
        // Only add sample data if no doctors exist
        if (doctorRepository.count() == 0) {
            addSampleDoctors();
            System.out.println("Sample doctors data initialized!");
        } else {
            System.out.println("Doctors data already exists. Count: " + doctorRepository.count());
        }
    }

    private void addSampleDoctors() {
        // Doctor 1 - Cardiologist
        Doctor doctor1 = new Doctor();
        doctor1.setName("Dr. Sarah Johnson");
        doctor1.setSpeciality("Cardiologist");
        doctor1.setDegree("MD, DM Cardiology");
        doctor1.setExperience("10 years");
        doctor1.setFees(1500.00);
        doctor1.setAbout("Experienced cardiologist with expertise in heart diseases and treatments. Specialized in angioplasty and bypass surgery.");
        doctor1.setImage("https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400");
        doctor1.setVerified(true);

        Address address1 = new Address();
        address1.setLine1("123 Heart Care Center");
        address1.setLine2("Medical Street");
        address1.setCity("Mumbai");
        address1.setState("Maharashtra");
        address1.setZipCode("400001");
        doctor1.setAddress(address1);

        doctorRepository.save(doctor1);

        // Doctor 2 - Dermatologist
        Doctor doctor2 = new Doctor();
        doctor2.setName("Dr. Michael Chen");
        doctor2.setSpeciality("Dermatologist");
        doctor2.setDegree("MD, Dermatology");
        doctor2.setExperience("8 years");
        doctor2.setFees(1200.00);
        doctor2.setAbout("Specialized in skin treatments and cosmetic dermatology. Expert in acne treatment and skin rejuvenation.");
        doctor2.setImage("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400");
        doctor2.setVerified(true);

        Address address2 = new Address();
        address2.setLine1("456 Skin Clinic");
        address2.setLine2("Beauty Road");
        address2.setCity("Delhi");
        address2.setState("Delhi");
        address2.setZipCode("110001");
        doctor2.setAddress(address2);

        doctorRepository.save(doctor2);

        // Doctor 3 - Pediatrician
        Doctor doctor3 = new Doctor();
        doctor3.setName("Dr. Emily Davis");
        doctor3.setSpeciality("Pediatrician");
        doctor3.setDegree("MD, Pediatrics");
        doctor3.setExperience("12 years");
        doctor3.setFees(1000.00);
        doctor3.setAbout("Dedicated to children's health and wellness. Specialized in child development and vaccination.");
        doctor3.setImage("https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?w=400");
        doctor3.setVerified(true);

        Address address3 = new Address();
        address3.setLine1("789 Child Care");
        address3.setLine2("Kids Street");
        address3.setCity("Bangalore");
        address3.setState("Karnataka");
        address3.setZipCode("560001");
        doctor3.setAddress(address3);

        doctorRepository.save(doctor3);

        // Doctor 4 - Gynecologist
        Doctor doctor4 = new Doctor();
        doctor4.setName("Dr. Priya Sharma");
        doctor4.setSpeciality("Gynecologist");
        doctor4.setDegree("MD, Gynecology");
        doctor4.setExperience("9 years");
        doctor4.setFees(1300.00);
        doctor4.setAbout("Women's health specialist with expertise in pregnancy care and women's wellness.");
        doctor4.setImage("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400");
        doctor4.setVerified(true);

        Address address4 = new Address();
        address4.setLine1("321 Women's Health");
        address4.setLine2("Care Avenue");
        address4.setCity("Chennai");
        address4.setState("Tamil Nadu");
        address4.setZipCode("600001");
        doctor4.setAddress(address4);

        doctorRepository.save(doctor4);

        // Doctor 5 - Neurologist
        Doctor doctor5 = new Doctor();
        doctor5.setName("Dr. Robert Wilson");
        doctor5.setSpeciality("Neurologist");
        doctor5.setDegree("DM, Neurology");
        doctor5.setExperience("15 years");
        doctor5.setFees(2000.00);
        doctor5.setAbout("Expert in brain and nervous system disorders. Specialized in stroke treatment and epilepsy.");
        doctor5.setImage("https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400");
        doctor5.setVerified(true);

        Address address5 = new Address();
        address5.setLine1("654 Neuro Care");
        address5.setLine2("Brain Street");
        address5.setCity("Hyderabad");
        address5.setState("Telangana");
        address5.setZipCode("500001");
        doctor5.setAddress(address5);

        doctorRepository.save(doctor5);

        System.out.println("Added " + doctorRepository.count() + " sample doctors to database");
    }
}