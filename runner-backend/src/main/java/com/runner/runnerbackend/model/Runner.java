package com.runner.runnerbackend.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "runner")
public class Runner {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "runner_full_name")
    private String runnerFullName;

    @Column(name = "runner_birth_date")
    private LocalDateTime runnerBirthDate;

    @Column(name = "runner_club")
    private String runnerClub;
}
