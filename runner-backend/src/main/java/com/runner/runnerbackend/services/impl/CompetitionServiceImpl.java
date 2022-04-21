package com.runner.runnerbackend.services.impl;

import com.runner.runnerbackend.model.Competition;
import com.runner.runnerbackend.repository.CompetitionRepo;
import com.runner.runnerbackend.services.CompetitionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class CompetitionServiceImpl implements CompetitionService {

    private @Resource CompetitionRepo competitionRepo;

    @Override
    public List<Competition> getAll() {
        return competitionRepo.findAll();
    }

    @Override
    public Competition add(Competition competition) {
        return competitionRepo.save(competition);
    }

    @Override
    public void deleteById(Long id) {
        competitionRepo.deleteById(id);
    }

    @Override
    public Competition getById(Long id) {
        return competitionRepo.findById(id).orElseThrow();
    }
}
