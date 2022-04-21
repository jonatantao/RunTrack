package com.runner.runnerbackend.services;

import com.runner.runnerbackend.model.Runner;

import java.util.List;

public interface RunnerService {

    List<Runner> getAll();

    Runner add(Runner runner);

    void deleteById(Long id);

    Runner getById(Long id);

}
