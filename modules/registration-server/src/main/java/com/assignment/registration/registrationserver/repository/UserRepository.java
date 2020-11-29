package com.assignment.registration.registrationserver.repository;

import com.assignment.registration.registrationserver.entity.User;

import java.util.List;

public interface UserRepository {
    public List<User> getUserList();
    public void createUser(User user);
}
