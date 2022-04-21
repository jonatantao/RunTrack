package com.runner.runnerbackend.services;

import com.runner.runnerbackend.model.Competition;

import java.util.List;

public interface CompetitionService {

    List<Competition> getAll();

    Competition add(Competition competition);

    void deleteById(Long id);

    Competition getById(Long id);
}
