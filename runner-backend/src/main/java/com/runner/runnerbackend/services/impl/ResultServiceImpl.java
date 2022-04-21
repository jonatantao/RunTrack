package com.runner.runnerbackend.services.impl;

import com.runner.runnerbackend.model.Results;
import com.runner.runnerbackend.repository.ResultRepo;
import com.runner.runnerbackend.services.ResultService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class ResultServiceImpl implements ResultService {

    private @Resource ResultRepo resultRepo;

    @Override
    public List<Results> getAll() {
        return resultRepo.findAll();
    }

    @Override
    public Results add(Results results) {
        return resultRepo.save(results);
    }

    @Override
    public void deleteById(Long id) {
        resultRepo.deleteById(id);
    }

    @Override
    public Results getById(Long id) {
        return resultRepo.findById(id).orElseThrow();
    }
}
