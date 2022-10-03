package com.runner.runnerbackend.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;

@Entity
@Table(name = "organizer")
@Data
@Accessors(chain = true)
public class Organizer {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "organizer_name")
    private String organizerName;

    @Column(name = "organizer_club")
    private String organizerClub;

    @Column(name = "organizer_description")
    private String organizerDescription;
}
