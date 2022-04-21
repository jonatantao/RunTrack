package com.runner.runnerbackend.services.impl;

import com.runner.runnerbackend.model.Runner;
import com.runner.runnerbackend.repository.RunnerRepo;
import com.runner.runnerbackend.services.RunnerService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class RunnerServiceImpl implements RunnerService {

    private @Resource RunnerRepo runnerRepo;

    @Override
    public List<Runner> getAll() {
        return runnerRepo.findAll();
    }

    @Override
    public Runner add(Runner runner) {
        return runnerRepo.save(runner);
    }

    @Override
    public void deleteById(Long id) {
        runnerRepo.deleteById(id);
    }

    @Override
    public Runner getById(Long id) {
        return runnerRepo.findById(id).orElseThrow();
    }
}
