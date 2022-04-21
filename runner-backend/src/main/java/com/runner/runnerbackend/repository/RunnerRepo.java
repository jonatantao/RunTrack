package com.runner.runnerbackend.repository;

import com.runner.runnerbackend.model.Runner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RunnerRepo extends JpaRepository<Runner, Long> {
}
