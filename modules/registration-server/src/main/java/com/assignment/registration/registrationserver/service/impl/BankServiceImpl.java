package com.assignment.registration.registrationserver.service.impl;

import com.assignment.registration.registrationserver.repository.BankRepository;
import com.assignment.registration.registrationserver.service.BankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BankServiceImpl implements BankService {
    private final BankRepository bankRepository;

    @Autowired
    public BankServiceImpl(BankRepository bankRepository){
        this.bankRepository = bankRepository;
    }

    @Override
    public List<String> getBankNames() {
        return bankRepository.getBankList();
    }
}
