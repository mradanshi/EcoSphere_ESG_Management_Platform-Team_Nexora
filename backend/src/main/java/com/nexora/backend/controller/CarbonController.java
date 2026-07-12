package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CarbonController {

    private List<Map<String, Object>> records = new ArrayList<>();

    @PostMapping("/carbon")

    public Map<String, Object> addCarbon(@RequestBody Map<String, Object> body) {

        records.add(body);

        Map<String, Object> response = new HashMap<>();

        response.put("message", "Carbon Record Added Successfully");
        response.put("status", "success");
        response.put("timestamp", new Date());

        return response;
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