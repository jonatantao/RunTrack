package com.runner.runnerbackend.repository;

import com.runner.runnerbackend.model.Results;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResultRepo extends JpaRepository<Results, Long> {
}
