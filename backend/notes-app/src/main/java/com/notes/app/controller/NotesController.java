package com.notes.app.controller;

import com.notes.app.oas.api.NoteApi;
import com.notes.app.oas.model.CreateNoteRequest;
import com.notes.app.oas.model.CreateNoteResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

@Controller
public class NotesController implements NoteApi {
    
    @Override
    public ResponseEntity<CreateNoteResponse> createNote(CreateNoteRequest createNoteRequest) {
        CreateNoteResponse createNoteResponse = new CreateNoteResponse("id", createNoteRequest.getNote(), createNoteRequest.getContent());
        return ResponseEntity.ok(createNoteResponse);
    }
}
