package com.runner.runnerbackend.controller;

import com.runner.runnerbackend.model.Runner;
import com.runner.runnerbackend.services.RunnerService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/runner")
public class RunnerController {

    private @Resource RunnerService runnerService;

    @GetMapping
    public List<Runner> getAll() {
        return runnerService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Runner getById(@PathVariable Long id) {
        return runnerService.getById(id);
    }

    @PostMapping
    public Runner create(@Valid @RequestBody Runner runner) {
        return runnerService.add(runner);
    }

    @PutMapping(value = "/{id}")
    public Runner update(@PathVariable Long id, @Valid @RequestBody Runner runner) {
        runner.setId(id);
        return runnerService.add(runner);
    }
}
