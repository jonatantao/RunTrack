package com.unicornsolutions.demobackend.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "organizer")
public class Organizer {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "organizer_name")
    private String organizerName;

    @Column(name = "organizer_club")
    private String organizerClub;

    @Column(name = "organizer_description")
    private String organizerDescription;
}
