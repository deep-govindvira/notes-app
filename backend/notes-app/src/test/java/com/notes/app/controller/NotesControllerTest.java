package com.notes.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.notes.app.oas.model.CreateNoteRequest;
import com.notes.app.oas.model.CreateNoteResponse;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = NotesController.class)
public class NotesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testCreateNote() throws Exception {
        CreateNoteRequest createNoteRequest = new CreateNoteRequest("note", "content");
        mockMvc.perform(post("/note").contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(createNoteRequest)))
                .andExpect(status().isOk())
                .andExpect(result -> {
                    CreateNoteResponse createNoteResponse = objectMapper.readValue(result.getResponse().getContentAsString(), CreateNoteResponse.class);
                    Assertions.assertEquals("note", createNoteResponse.getNote());
                    Assertions.assertEquals("content", createNoteResponse.getContent());
                });
    }
}

