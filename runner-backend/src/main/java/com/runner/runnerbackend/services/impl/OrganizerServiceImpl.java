package com.runner.runnerbackend.services.impl;

import com.runner.runnerbackend.model.Organizer;
import com.runner.runnerbackend.repository.OrganizerRepo;
import com.runner.runnerbackend.services.OrganizerService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class OrganizerServiceImpl implements OrganizerService {

    private @Resource OrganizerRepo organizerRepo;

    @Override
    public List<Organizer> getAll() {
        return organizerRepo.findAll();
    }

    @Override
    public Organizer add(Organizer organizer) {
        return organizerRepo.save(organizer);
    }

    @Override
    public void deleteById(Long id) {
        organizerRepo.deleteById(id);
    }

    @Override
    public Organizer getById(Long id) {
        return organizerRepo.findById(id).orElseThrow();
    }
}
