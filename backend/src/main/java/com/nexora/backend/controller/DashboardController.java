package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DashboardController {

    @GetMapping("/dashboard")
    public Map<String, Object> dashboard() {

        Map<String, Object> data = new HashMap<>();

        data.put("totalEmission", 550);
        data.put("monthlyEmission", 125);
        data.put("esgScore", 82);
        data.put("treesRequired", 28);
        data.put("status", "GOOD");
        data.put("lastUpdated", new Date());

        return data;
    }
}