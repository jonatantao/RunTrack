package com.unicornsolutions.demobackend.repository;

import com.unicornsolutions.demobackend.model.Competition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompetitionRepo extends JpaRepository<Competition, Long> {
}
