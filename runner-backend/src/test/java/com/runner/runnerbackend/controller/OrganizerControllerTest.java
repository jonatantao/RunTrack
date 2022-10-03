package com.runner.runnerbackend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.runner.runnerbackend.model.Organizer;
import com.runner.runnerbackend.services.impl.OrganizerServiceImpl;
import lombok.SneakyThrows;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(OrganizerController.class)
class OrganizerControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private OrganizerServiceImpl organizerService;

    private static ObjectMapper mapper = new ObjectMapper();

    @Test
    @SneakyThrows
    public void saveOrganizer() {
        when(organizerService.add(any())).thenReturn();

        Organizer org = new Organizer().setOrganizerName("fdsf").setOrganizerClub("fds");
        String json = mapper.writeValueAsString(org);

        mockMvc.perform(
                post("/api/organizer")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$", Matchers.equalTo(1)));

        verify(organizerService, times(1)).add(any());
    }



}