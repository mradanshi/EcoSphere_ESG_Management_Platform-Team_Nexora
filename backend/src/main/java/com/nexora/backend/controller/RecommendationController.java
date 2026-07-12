package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class RecommendationController {

    @GetMapping("/recommendations")
    public List<String> recommendations(){

        return Arrays.asList(

                "Switch to LED Lighting",

                "Reduce Paper Usage",

                "Increase Solar Energy Adoption",

                "Optimize Transportation Routes",

                "Plant More Trees"

        );

    }

}