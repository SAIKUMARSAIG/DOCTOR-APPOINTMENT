//package org.app.backend.entity;
//
////import jakarta.persistence.*;
////import jakarta.validation.constraints.Email;
////import jakarta.validation.constraints.NotBlank;
////import java.time.LocalDate;
////import java.util.List;
////
////@Entity
////@Table(name = "users")
////public class User {
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private Long id;
////
////    @NotBlank
////    @Column(nullable = false)
////    private String name;
////
////    @Email
////    @Column(nullable = false, unique = true)
////    private String email;
////
////    @NotBlank
////    @Column(nullable = false)
////    private String password;
////
////    private String phone;
////
////    @Embedded
////    private Address address;
////
////    private String gender;
////
////    private LocalDate dob;
////
////    @Column(name = "profile_pic_url")
////    private String profilePicUrl;
////
////    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
////    private List<Appointment> appointments;
////
////    // Constructors
////    public User() {}
////
////    public User(String name, String email, String password) {
////        this.name = name;
////        this.email = email;
////        this.password = password;
////    }
////
////    // Getters and Setters
////    public Long getId() { return id; }
////    public void setId(Long id) { this.id = id; }
////
////    public String getName() { return name; }
////    public void setName(String name) { this.name = name; }
////
////    public String getEmail() { return email; }
////    public void setEmail(String email) { this.email = email; }
////
////    public String getPassword() { return password; }
////    public void setPassword(String password) { this.password = password; }
////
////    public String getPhone() { return phone; }
////    public void setPhone(String phone) { this.phone = phone; }
////
////    public Address getAddress() { return address; }
////    public void setAddress(Address address) { this.address = address; }
////
////    public String getGender() { return gender; }
////    public void setGender(String gender) { this.gender = gender; }
////
////    public LocalDate getDob() { return dob; }
////    public void setDob(LocalDate dob) { this.dob = dob; }
////
////    public String getProfilePicUrl() { return profilePicUrl; }
////    public void setProfilePicUrl(String profilePicUrl) { this.profilePicUrl = profilePicUrl; }
////
////    public List<Appointment> getAppointments() { return appointments; }
////    public void setAppointments(List<Appointment> appointments) { this.appointments = appointments; }
////}
//
//
//
//
//import jakarta.persistence.*;
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;
//import java.time.LocalDate;
//import java.util.List;
//
//@Entity
//@Table(name = "users")
//public class User {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @NotBlank
//    @Column(nullable = false)
//    private String name;
//
//    @Email
//    @Column(nullable = false, unique = true)
//    private String email;
//
//    @NotBlank
//    @Column(nullable = false)
//    private String password;
//
//    private String phone;
//
//    @Embedded
//    private Address address;
//
//    private String gender;
//
//    private LocalDate dob;
//
//    @Column(name = "profile_pic_url")
//    private String profilePicUrl;
//
//    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
//    private List<Appointment> appointments;
//
//    // Constructors
//    public User() {}
//
//    public User(String name, String email, String password) {
//        this.name = name;
//        this.email = email;
//        this.password = password;
//    }
//
//    // Getters and Setters
//    public Long getId() { return id; }
//    public void setId(Long id) { this.id = id; }
//
//    public String getName() { return name; }
//    public void setName(String name) { this.name = name; }
//
//    public String getEmail() { return email; }
//    public void setEmail(String email) { this.email = email; }
//
//    public String getPassword() { return password; }
//    public void setPassword(String password) { this.password = password; }
//
//    public String getPhone() { return phone; }
//    public void setPhone(String phone) { this.phone = phone; }
//
//    public Address getAddress() { return address; }
//    public void setAddress(Address address) { this.address = address; }
//
//    public String getGender() { return gender; }
//    public void setGender(String gender) { this.gender = gender; }
//
//    public LocalDate getDob() { return dob; }
//    public void setDob(LocalDate dob) { this.dob = dob; }
//
//    public String getProfilePicUrl() { return profilePicUrl; }
//    public void setProfilePicUrl(String profilePicUrl) { this.profilePicUrl = profilePicUrl; }
//
//    public List<Appointment> getAppointments() { return appointments; }
//    public void setAppointments(List<Appointment> appointments) { this.appointments = appointments; }
//}


package org.app.backend.entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "users")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Column(nullable = false)
    private String name;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @NotBlank
    @Column(nullable = false)
    private String password;

    private String phone;

    @Embedded
    private Address address;

    private String gender;

    private LocalDate dob;

    @Column(name = "profile_pic_url")
    private String profilePicUrl;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Appointment> appointments;

    // Constructors
    public User() {}

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }

    public Address getAddress() { return address; }
    public void setAddress(Address address) { this.address = address; }

    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }

    public LocalDate getDob() { return dob; }
    public void setDob(LocalDate dob) { this.dob = dob; }

    public String getProfilePicUrl() { return profilePicUrl; }
    public void setProfilePicUrl(String profilePicUrl) { this.profilePicUrl = profilePicUrl; }

    public List<Appointment> getAppointments() { return appointments; }
    public void setAppointments(List<Appointment> appointments) { this.appointments = appointments; }


}