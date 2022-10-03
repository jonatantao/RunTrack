package com.runner.runnerbackend.services;

import com.runner.runnerbackend.model.Organizer;
import com.runner.runnerbackend.repository.OrganizerRepo;
import com.runner.runnerbackend.services.impl.OrganizerServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class OrganizerServiceTest {

    @InjectMocks
    private OrganizerServiceImpl organizerService;

    @Mock
    private OrganizerRepo organizerRepo;

    @Mock
    private Organizer organizer;

    @Test
    void getAll() {
    }

    @AfterEach
    void tearDown() {

    }

    @Test
    public void add() {
        //setup
        Long generatedId = 1L;

        Organizer fakeEntity = new Organizer();
        fakeEntity.setId(1l);
        fakeEntity.setOrganizerName("wwerw");
        fakeEntity.setOrganizerDescription("ewfdfgdfg");

        Organizer fakeEntity2 = new Organizer().setId(1l).setOrganizerName("ertert").setOrganizerDescription("dsada");


        when(organizerRepo.save(any(Organizer.class)))
                .thenReturn(fakeEntity2);


        //execution

        Organizer organizerToSave = new Organizer().setId(3l).setOrganizerName("ertert").setOrganizerDescription("dsada");

        Long id = organizerService.add(organizerToSave).getId();

        // verification
        assertEquals(generatedId, id);
        verify(organizerRepo, times(1)).save(any());
        //assertEquals(fakeEntity2.toString());
    }

    @Test
    void deleteById() {
    }

    @Test
    void getById() {
    }

    @BeforeEach
    void setUp() {

    }
}