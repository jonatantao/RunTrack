package com.unicornsolutions.demobackend.model;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "competition")
public class Competition {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "competition_name")
    private String competitionName;

    @Column(name = "competition_description")
    private String competitionDescription;

    @ManyToOne
    @JoinColumn(name = "organizer_id")
    private Organizer organizerId;

    @Column(name = "competition_date")
    private LocalDateTime competitionDate;

    @Column(name = "competition_price")
    private BigDecimal competitionPrice;
}
