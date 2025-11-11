package org.app.backend.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public")
public class TestController {

    @GetMapping("/test")
    public String test() {
        return "Backend is running successfully!";
    }

    @GetMapping("/doctors-test")
    public String doctorsTest() {
        return "Doctors endpoint is accessible!";
    }
}