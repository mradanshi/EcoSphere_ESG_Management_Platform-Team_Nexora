package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ESGController {

    @GetMapping("/esg-score")
    public Map<String, Object> score() {

        Map<String, Object> response = new HashMap<>();

        response.put("score", 82);
        response.put("grade", "A");
        response.put("status", "Excellent");
        response.put("recommendation", "Maintain current sustainability practices");

        return response;
    }
}