package com.notes.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    int counter = 0;

    @GetMapping("/hello")
    public String hello() {
        counter++;
        return "Hello World! " + counter;
    }
}
