package com.runner.runnerbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "runner")
public class Runner {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "runner_full_name")
    private String runnerFullName;

    @Column(name = "runner_birth_date")
    private LocalDateTime runnerBirthDate;

    @Column(name = "runner_club")
    private String runnerClub;
}
