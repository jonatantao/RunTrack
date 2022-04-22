package com.runner.runnerbackend.controller;

import com.runner.runnerbackend.model.Results;
import com.runner.runnerbackend.services.ResultService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/result")
public class ResultController {

    private @Resource ResultService resultService;

    @GetMapping
    public List<Results> getAll() {
        return resultService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Results getById(@PathVariable Long id) {
        return resultService.getById(id);
    }

    @PostMapping
    public Results create(@Valid @RequestBody Results organizer) {
        return resultService.add(organizer);
    }

    @PutMapping(value = "/{id}")
    public Results update(@PathVariable Long id, @Valid @RequestBody Results organizer) {
        organizer.setId(id);
        return resultService.add(organizer);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id){
        resultService.deleteById(id);
    }
}
