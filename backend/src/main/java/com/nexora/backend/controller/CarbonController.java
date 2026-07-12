package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CarbonController {

    private List<Map<String, Object>> records = new ArrayList<>();

    @PostMapping("/carbon")
    public String addCarbon(@RequestBody Map<String, Object> body) {

        records.add(body);

        return "Carbon Record Added Successfully";
    }

    @GetMapping("/carbon")
    public List<Map<String, Object>> getAllCarbon() {
        return records;
    }

    @GetMapping("/health")
    public String health() {
        return "EcoSphere Backend Running Successfully";
    }

}