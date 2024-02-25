package com.notes.app.controller;

import com.notes.app.convertor.NoteConvertor;
import com.notes.app.datastore.dao.NoteEntityDao;
import com.notes.app.datastore.entity.NoteEntity;
import com.notes.app.oas.api.NoteApi;
import com.notes.app.oas.model.CreateNoteRequest;
import com.notes.app.oas.model.Note;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Controller
public class NotesController implements NoteApi {

    NoteEntityDao noteEntityDao = new NoteEntityDao();

    @Override
    public ResponseEntity<Note> createNote(final CreateNoteRequest createNoteRequest) {
        // for database
        final NoteEntity noteEntity = NoteEntity.builder()
                .id(UUID.randomUUID().toString())
                .title(createNoteRequest.getNote())
                .description(createNoteRequest.getContent())
                .build();
        noteEntityDao.insert(noteEntity);
        // for response
        final Note note = NoteConvertor.convert(noteEntity);
        return ResponseEntity.ok(note);
    }

    @Override
    public ResponseEntity<Note> getNoteById(final String id) {
        final NoteEntity noteEntity = noteEntityDao.getNoteById(id);
        final Note note = NoteConvertor.convert(noteEntity);
        return ResponseEntity.ok(note);
    }

    @Override
    public ResponseEntity<List<Note>> getAllNotes() {
        List<NoteEntity> noteEntityList = noteEntityDao.getAllNotes();
        List<Note> noteList = new ArrayList<>();
        for(NoteEntity noteEntity : noteEntityList) {
            final Note note = NoteConvertor.convert(noteEntity);
            noteList.add(note);
        }
        return ResponseEntity.ok(noteList);
    }
}
