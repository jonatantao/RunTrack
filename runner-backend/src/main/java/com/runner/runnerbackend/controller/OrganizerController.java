package com.runner.runnerbackend.controller;

import com.runner.runnerbackend.model.Organizer;
import com.runner.runnerbackend.services.OrganizerService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/organizer")
public class OrganizerController {

    private @Resource OrganizerService organizerService;

    @GetMapping
    public List<Organizer> getAll() {
        return organizerService.getAll();
    }

    @GetMapping(value = "/{id}")
    public Organizer getById(@PathVariable Long id) {
        return organizerService.getById(id);
    }

    @PostMapping
    public Organizer create(@Valid @RequestBody Organizer organizer) {
        return organizerService.add(organizer);
    }

    @PutMapping(value = "/{id}")
    public Organizer update(@PathVariable Long id, @Valid @RequestBody Organizer organizer) {
        organizer.setId(id);
        return organizerService.add(organizer);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Long id){
        organizerService.deleteById(id);
    }
}
