package com.assignment.registration.registrationserver.repository;

import com.assignment.registration.registrationserver.entity.Gender;

import java.util.List;

public interface GenderRepository {
    public List<String> getGenderList();
    public String getGenderIdByName(String gender);
}
