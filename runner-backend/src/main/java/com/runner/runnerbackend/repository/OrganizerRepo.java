package com.runner.runnerbackend.repository;

import com.runner.runnerbackend.model.Organizer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrganizerRepo extends JpaRepository<Organizer, Long> {
}
