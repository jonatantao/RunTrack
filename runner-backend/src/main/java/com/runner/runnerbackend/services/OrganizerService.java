package com.runner.runnerbackend.services;

import com.runner.runnerbackend.model.Organizer;

import java.util.List;

public interface OrganizerService {

    List<Organizer> getAll();

    Organizer add(Organizer organizer);

    void deleteById(Long id);

    Organizer getById(Long id);
}
