package com.notes.app.controller;

import com.notes.app.convertor.NoteConvertor;
import com.notes.app.datastore.dao.NoteEntityDao;
import com.notes.app.datastore.entity.NoteEntity;
import com.notes.app.oas.api.NoteApi;
import com.notes.app.oas.model.Note;
import com.notes.app.oas.model.NoteRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@CrossOrigin
@Controller
public class NotesController implements NoteApi {

    private final NoteEntityDao noteEntityDao = new NoteEntityDao();

    @Override
    public ResponseEntity<Note> createNote(final NoteRequest noteRequest) {
        // for database
        final NoteEntity noteEntity = NoteEntity.builder()
            .id(UUID.randomUUID().toString())
            .title(noteRequest.getTitle())
            .description(noteRequest.getDescription())
            .color(noteRequest.getColor())
            .date(noteRequest.getDate())
            .dust(noteRequest.getDust())
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
        final List<NoteEntity> noteEntityList = noteEntityDao.getAllNotes();
        final List<Note> noteList = new ArrayList<>();
        for (NoteEntity noteEntity : noteEntityList) {
            final Note note = NoteConvertor.convert(noteEntity);
            noteList.add(note);
        }
        return ResponseEntity.ok(noteList);
    }

    @Override
    public ResponseEntity<Note> deleteNoteById(String id) {
        final NoteEntity noteEntity = noteEntityDao.getNoteById(id);
        final Note note = NoteConvertor.convert(noteEntity);
        noteEntityDao.deleteNoteById(id);
        return ResponseEntity.ok(note);
    }

    @Override
    public ResponseEntity<Note> updateNoteById(String id, NoteRequest noteRequest) {
        // noteEntityDao.deleteNoteById(id);
        final NoteEntity noteEntity = NoteEntity.builder()
            .id(id)
            .title(noteRequest.getTitle())
            .description(noteRequest.getDescription())
            .color(noteRequest.getColor())
            .date(noteRequest.getDate())
            .dust(noteRequest.getDust())
            .build();
        noteEntityDao.insert(noteEntity);
        final Note note = NoteConvertor.convert(noteEntity);
        return ResponseEntity.ok(note);

    }
}
