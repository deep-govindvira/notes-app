package com.notes.app.convertor;

import com.notes.app.datastore.entity.NoteEntity;
import com.notes.app.oas.model.Note;

public class NoteConvertor {
    public static Note convert(final NoteEntity noteEntity) {
        final Note note = Note.builder()
                .id(noteEntity.getId())
                .title(noteEntity.getTitle())
                .description(noteEntity.getDescription())
                .build();
        return note;
    }
}
