package com.runner.runnerbackend.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "results")
public class Results {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "runner_id")
    private Runner runnerId;

    @Column(name = "results_time")
    private LocalDateTime resultsTime;

    @Column(name = "results_place")
    private Integer resultsPlace;
}
