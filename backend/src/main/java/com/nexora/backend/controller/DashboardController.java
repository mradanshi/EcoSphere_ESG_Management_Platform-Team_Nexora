package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DashboardController {

    @GetMapping("/dashboard")
    public Map<String,Object> dashboard(){

        Map<String,Object> dashboard=new HashMap<>();

        dashboard.put("totalEmission",550);
        dashboard.put("monthlyEmission",125);
        dashboard.put("esgScore",82);
        dashboard.put("treesRequired",28);
        dashboard.put("status","GOOD");

        return dashboard;
    }

}