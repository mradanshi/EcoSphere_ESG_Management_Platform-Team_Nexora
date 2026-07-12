package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class StatisticsController {

    @GetMapping("/statistics")
    public Map<String,Object> statistics(){

        Map<String,Object> stats=new HashMap<>();

        stats.put("employees",450);
        stats.put("departments",8);
        stats.put("reportsGenerated",152);
        stats.put("carbonSaved","1.8 Tons");

        return stats;

    }

}