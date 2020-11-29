package com.assignment.registration.registrationserver.repository;

import java.util.List;

public interface BankRepository {
    public List<String> getBankList();
    public String getBankIdByName(String bankName);
}
