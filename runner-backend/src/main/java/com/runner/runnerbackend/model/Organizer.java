package com.runner.runnerbackend.model;

import lombok.Data;
import lombok.experimental.Accessors;

import javax.persistence.*;

//@Data
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

    /*
    public Long getId() {
        return id;
    }

    public Organizer setId(Long id) {
        this.id = id;
        return this;
    }

    public String getOrganizerName() {
        return organizerName;
    }

    public void setOrganizerName(String organizerName) {
        this.organizerName = organizerName;
    }

    public String getOrganizerClub() {
        return organizerClub;
    }

    public void setOrganizerClub(String organizerClub) {
        this.organizerClub = organizerClub;
    }

    public String getOrganizerDescription() {
        return organizerDescription;
    }

    public void setOrganizerDescription(String organizerDescription) {
        this.organizerDescription = organizerDescription;
    }
     */
}
