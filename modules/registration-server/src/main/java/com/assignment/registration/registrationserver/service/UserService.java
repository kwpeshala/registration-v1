package com.assignment.registration.registrationserver.service;


import com.assignment.registration.registrationserver.entity.User;

import java.util.List;

public interface UserService {
    public List<User> getUsers();
    public void addNewUser(User user);
}
