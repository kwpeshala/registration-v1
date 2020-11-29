package com.assignment.registration.registrationserver.service.impl;

import com.assignment.registration.registrationserver.repository.GenderRepository;
import com.assignment.registration.registrationserver.service.GenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenderServiceImpl implements GenderService {
    private final GenderRepository genderRepository;

    @Autowired
    public GenderServiceImpl(GenderRepository genderRepository){
        this.genderRepository = genderRepository;
    }

    public List<String> getGender(){
        return genderRepository.getGenderList();
    }

}
