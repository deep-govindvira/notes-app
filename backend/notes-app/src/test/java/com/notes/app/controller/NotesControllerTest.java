package com.notes.app.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.notes.app.oas.model.CreateNoteRequest;
import com.notes.app.oas.model.Note;
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
                    Note note = objectMapper.readValue(result.getResponse().getContentAsString(), Note.class);
                    Assertions.assertEquals("note", note.getNote());
                    Assertions.assertEquals("content", note.getContent());
                });
    }
}

