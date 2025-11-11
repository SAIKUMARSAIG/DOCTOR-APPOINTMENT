//package org.app.backend.entity;
//
//
//
//import jakarta.persistence.*;
//import jakarta.validation.constraints.NotBlank;
//import java.util.List;
//
//@Entity
//@Table(name = "doctors")
//public class Doctor {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @NotBlank
//    @Column(nullable = false)
//    private String name;
//
//    @NotBlank
//    @Column(nullable = false)
//    private String speciality;
//
//    private String degree;
//    private String experience;
//    private Double fees;
//
//    @Column(length = 1000)
//    private String about;
//
//    private String image;
//
//    private Boolean verified = false;
//
//    @Embedded
//    private Address address;
//
//    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
//    private List<Appointment> appointments;
//
//    // Constructors
//    public Doctor() {}
//
//    public Doctor(String name, String speciality, String degree, String experience, Double fees) {
//        this.name = name;
//        this.speciality = speciality;
//        this.degree = degree;
//        this.experience = experience;
//        this.fees = fees;
//    }
//
//    // Getters and Setters
//    public Long getId() { return id; }
//    public void setId(Long id) { this.id = id; }
//
//    public String getName() { return name; }
//    public void setName(String name) { this.name = name; }
//
//    public String getSpeciality() { return speciality; }
//    public void setSpeciality(String speciality) { this.speciality = speciality; }
//
//    public String getDegree() { return degree; }
//    public void setDegree(String degree) { this.degree = degree; }
//
//    public String getExperience() { return experience; }
//    public void setExperience(String experience) { this.experience = experience; }
//
//    public Double getFees() { return fees; }
//    public void setFees(Double fees) { this.fees = fees; }
//
//    public String getAbout() { return about; }
//    public void setAbout(String about) { this.about = about; }
//
//    public String getImage() { return image; }
//    public void setImage(String image) { this.image = image; }
//
//    public Boolean getVerified() { return verified; }
//    public void setVerified(Boolean verified) { this.verified = verified; }
//
//    public Address getAddress() { return address; }
//    public void setAddress(Address address) { this.address = address; }
//
//    public List<Appointment> getAppointments() { return appointments; }
//    public void setAppointments(List<Appointment> appointments) { this.appointments = appointments; }
//}









package org.app.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import java.util.List;

@Entity
@Table(name = "doctors")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String name;

    @NotBlank
    @Column(nullable = false)
    private String speciality;

    private String degree;
    private String experience;
    private Double fees;

    @Column(length = 1000)
    private String about;

    private String image;

    private Boolean verified = false;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "doctor", cascade = CascadeType.ALL)
    private List<Appointment> appointments;

    // Constructors
    public Doctor() {}

    public Doctor(String name, String speciality, String degree, String experience, Double fees) {
        this.name = name;
        this.speciality = speciality;
        this.degree = degree;
        this.experience = experience;
        this.fees = fees;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getSpeciality() { return speciality; }
    public void setSpeciality(String speciality) { this.speciality = speciality; }

    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }

    public String getExperience() { return experience; }
    public void setExperience(String experience) { this.experience = experience; }

    public Double getFees() { return fees; }
    public void setFees(Double fees) { this.fees = fees; }

    public String getAbout() { return about; }
    public void setAbout(String about) { this.about = about; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public Boolean getVerified() { return verified; }
    public void setVerified(Boolean verified) { this.verified = verified; }

    public Address getAddress() { return address; }
    public void setAddress(Address address) { this.address = address; }

    public List<Appointment> getAppointments() { return appointments; }
    public void setAppointments(List<Appointment> appointments) { this.appointments = appointments; }
}