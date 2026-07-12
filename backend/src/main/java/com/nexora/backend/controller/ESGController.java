package com.nexora.backend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ESGController {

    @GetMapping("/esg-score")
    public Map<String,Object> score(){

        Map<String,Object> score=new HashMap<>();

        score.put("score",82);
        score.put("grade","A");
        score.put("status","Excellent");

        return score;
    }

}