package com.runner.runnerbackend.controller;

import com.runner.runnerbackend.model.Competition;
import com.runner.runnerbackend.services.CompetitionService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/competition")
public class CompetitionController {

    private @Resource CompetitionService competitionService;

    @GetMapping
    public List<Competition> getAll() {
        return competitionService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Competition getById(@PathVariable Long id) {
        return competitionService.getById(id);
    }

    @PostMapping
    public Competition create(@Valid @RequestBody Competition competition) {
        return competitionService.add(competition);
    }

    @PutMapping(value = "/{id}")
    public Competition update(@PathVariable Long id, @Valid @RequestBody Competition competition) {
        competition.setId(id);
        return competitionService.add(competition);
    }

}
