package com.notes.app.convertor;

import com.notes.app.datastore.entity.NoteEntity;
import com.notes.app.oas.model.Note;

public class NoteConvertor {
    public static Note convert(final NoteEntity noteEntity) {
        final Note note = Note.builder()
                .id(noteEntity.getId())
                .note(noteEntity.getTitle())
                .content(noteEntity.getDescription())
                .build();
        return note;
    }
}
