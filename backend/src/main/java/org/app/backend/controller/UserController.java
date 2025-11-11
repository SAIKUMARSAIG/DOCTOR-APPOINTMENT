//
//package org.app.backend.controller;
//
//import org.app.backend.config.UserPrincipal;
//import org.app.backend.entity.Address;
//import org.app.backend.entity.User;
//import org.app.backend.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.*;
//
//import java.time.LocalDate;
//import java.util.HashMap;
//import java.util.Map;
//import java.util.Optional;
//
//@CrossOrigin(origins = "*", maxAge = 3600)
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//    @Autowired
//    private UserService userService;
//
//    @GetMapping("/test")
//    public String test() {
//        return "User controller is working!";
//    }
//
//    @GetMapping("/profile")
//    public ResponseEntity<?> getUserProfile(Authentication authentication) {
//        try {
//            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
//            Optional<User> userOpt = userService.findByEmail(userPrincipal.getEmail());
//
//            if (userOpt.isPresent()) {
//                User user = userOpt.get();
//                Map<String, Object> response = new HashMap<>();
//                response.put("id", user.getId());
//                response.put("name", user.getName());
//                response.put("email", user.getEmail());
//                response.put("phone", user.getPhone());
//                response.put("gender", user.getGender());
//                response.put("dob", user.getDob());
//                response.put("address", user.getAddress());
//
//                return ResponseEntity.ok(response);
//            } else {
//                Map<String, String> error = new HashMap<>();
//                error.put("error", "User not found");
//                return ResponseEntity.status(404).body(error);
//            }
//        } catch (Exception e) {
//            Map<String, String> error = new HashMap<>();
//            error.put("error", "Authentication failed");
//            return ResponseEntity.status(401).body(error);
//        }
//    }
//
//    @PutMapping("/profile")
//    public ResponseEntity<?> updateUserProfile(@RequestBody Map<String, Object> updatedData, Authentication authentication) {
//        try {
//            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
//            Optional<User> userOpt = userService.findByEmail(userPrincipal.getEmail());
//
//            if (userOpt.isPresent()) {
//                User user = userOpt.get();
//                boolean updated = false;
//
//                if (updatedData.containsKey("name") && updatedData.get("name") != null) {
//                    user.setName((String) updatedData.get("name"));
//                    updated = true;
//                }
//
//                if (updatedData.containsKey("phone") && updatedData.get("phone") != null) {
//                    user.setPhone((String) updatedData.get("phone"));
//                    updated = true;
//                }
//
//                if (updatedData.containsKey("gender") && updatedData.get("gender") != null) {
//                    user.setGender((String) updatedData.get("gender"));
//                    updated = true;
//                }
//
//                if (updatedData.containsKey("dob") && updatedData.get("dob") != null) {
//                    try {
//                        user.setDob(LocalDate.parse((String) updatedData.get("dob")));
//                        updated = true;
//                    } catch (Exception e) {
//                        System.out.println("❌ Error parsing DOB: " + e.getMessage());
//                    }
//                }
//
//                if (updatedData.containsKey("address") && updatedData.get("address") != null) {
//                    @SuppressWarnings("unchecked")
//                    Map<String, Object> addrData = (Map<String, Object>) updatedData.get("address");
//                    Address address = user.getAddress() != null ? user.getAddress() : new Address();
//
//                    if (addrData.containsKey("line1")) address.setLine1((String) addrData.get("line1"));
//                    if (addrData.containsKey("line2")) address.setLine2((String) addrData.get("line2"));
//                    if (addrData.containsKey("city")) address.setCity((String) addrData.get("city"));
//                    if (addrData.containsKey("state")) address.setState((String) addrData.get("state"));
//                    if (addrData.containsKey("zipCode")) address.setZipCode((String) addrData.get("zipCode"));
//
//                    user.setAddress(address);
//                    updated = true;
//                }
//
//                if (updated) {
//                    User savedUser = userService.save(user);
//                    Map<String, Object> userResponse = new HashMap<>();
//                    userResponse.put("id", savedUser.getId());
//                    userResponse.put("name", savedUser.getName());
//                    userResponse.put("email", savedUser.getEmail());
//                    userResponse.put("phone", savedUser.getPhone());
//                    userResponse.put("gender", savedUser.getGender());
//                    userResponse.put("dob", savedUser.getDob());
//                    userResponse.put("address", savedUser.getAddress());
//
//                    Map<String, Object> response = new HashMap<>();
//                    response.put("success", true);
//                    response.put("message", "Profile updated successfully");
//                    response.put("user", userResponse);
//
//                    return ResponseEntity.ok(response);
//                } else {
//                    Map<String, Object> response = new HashMap<>();
//                    response.put("success", true);
//                    response.put("message", "No changes detected");
//                    return ResponseEntity.ok(response);
//                }
//            } else {
//                Map<String, String> error = new HashMap<>();
//                error.put("error", "User not found");
//                return ResponseEntity.status(404).body(error);
//            }
//
//        } catch (Exception e) {
//            Map<String, String> error = new HashMap<>();
//            error.put("error", "Authentication failed");
//            return ResponseEntity.status(401).body(error);
//        }
//    }
//}
//
//










package org.app.backend.controller;

import org.app.backend.config.UserPrincipal;
import org.app.backend.entity.Address;
import org.app.backend.entity.User;
import org.app.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String test() {
        return "User controller is working!";
    }

    @GetMapping("/profile")
    public ResponseEntity<?> getUserProfile(Authentication authentication) {
        try {
            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            Optional<User> userOpt = userService.findByEmail(userPrincipal.getEmail());

            if (userOpt.isPresent()) {
                User user = userOpt.get();
                Map<String, Object> response = new HashMap<>();

                Map<String, Object> userData = new HashMap<>();
                userData.put("id", user.getId());
                userData.put("name", user.getName());
                userData.put("email", user.getEmail());
                userData.put("phone", user.getPhone());
                userData.put("gender", user.getGender());
                userData.put("dob", user.getDob());
                userData.put("address", user.getAddress());

                // Wrap in consistent response format
                response.put("success", true);
                response.put("data", userData);

                return ResponseEntity.ok(response);
            } else {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("error", "User not found");
                return ResponseEntity.status(404).body(error);
            }
        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("error", "Authentication failed");
            return ResponseEntity.status(401).body(error);
        }
    }

    @PutMapping("/profile")
    public ResponseEntity<?> updateUserProfile(@RequestBody Map<String, Object> updatedData, Authentication authentication) {
        try {
            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            Optional<User> userOpt = userService.findByEmail(userPrincipal.getEmail());

            if (userOpt.isPresent()) {
                User user = userOpt.get();
                boolean updated = false;

                // ... existing update logic ...

                if (updated) {
                    User savedUser = userService.save(user);

                    Map<String, Object> userResponse = new HashMap<>();
                    userResponse.put("id", savedUser.getId());
                    userResponse.put("name", savedUser.getName());
                    userResponse.put("email", savedUser.getEmail());
                    userResponse.put("phone", savedUser.getPhone());
                    userResponse.put("gender", savedUser.getGender());
                    userResponse.put("dob", savedUser.getDob());
                    userResponse.put("address", savedUser.getAddress());

                    Map<String, Object> response = new HashMap<>();
                    response.put("success", true);
                    response.put("message", "Profile updated successfully");
                    response.put("data", userResponse); // ✅ Consistent format

                    return ResponseEntity.ok(response);
                } else {
                    Map<String, Object> response = new HashMap<>();
                    response.put("success", true);
                    response.put("message", "No changes detected");
                    response.put("data", null);
                    return ResponseEntity.ok(response);
                }
            } else {
                Map<String, Object> error = new HashMap<>();
                error.put("success", false);
                error.put("error", "User not found");
                return ResponseEntity.status(404).body(error);
            }

        } catch (Exception e) {
            Map<String, Object> error = new HashMap<>();
            error.put("success", false);
            error.put("error", "Authentication failed");
            return ResponseEntity.status(401).body(error);
        }
    }
}