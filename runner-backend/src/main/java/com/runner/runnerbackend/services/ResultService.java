package com.runner.runnerbackend.services;

import com.runner.runnerbackend.model.Results;

import java.util.List;

public interface ResultService {

    List<Results> getAll();

    Results add(Results results);

    void deleteById(Long id);

    Results getById(Long id);
}
