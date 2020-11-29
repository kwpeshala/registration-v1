package com.assignment.registration.registrationserver.controller;

import com.assignment.registration.registrationserver.service.GenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class GenderController {
    private final GenderService genderService;

    @Autowired
    public GenderController(GenderService genderService){
        this.genderService = genderService;
    }

    @GetMapping(value = "/api/gender")
    public List<String> getGenderList(){
        return genderService.getGender();
    }
}