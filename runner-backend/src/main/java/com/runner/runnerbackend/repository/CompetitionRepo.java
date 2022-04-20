package com.runner.runnerbackend.repository;

import com.runner.runnerbackend.model.Competition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetitionRepo extends JpaRepository<Competition, Long> {
}
