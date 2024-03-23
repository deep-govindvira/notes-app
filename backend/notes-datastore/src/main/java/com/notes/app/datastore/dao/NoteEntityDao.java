package com.notes.app.datastore.dao;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.notes.app.datastore.entity.NoteEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class NoteEntityDao {
    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public void insert(final NoteEntity noteEntity) {
        // CreateTableRequest createTableRequest = dynamoDBMapper.generateCreateTableRequest(NoteEntity.class);
        // createTableRequest.setProvisionedThroughput(new ProvisionedThroughput(1L, 1L)); // Set desired throughput
        // client.createTable(createTableRequest);
        dynamoDBMapper.save(noteEntity);
    }

    public NoteEntity getNoteById(final String id) {
        final NoteEntity noteEntity = NoteEntity.builder()
            .id(id)
            .build();
        return dynamoDBMapper.load(noteEntity);
    }

    public void deleteNoteById(final String id) {
        NoteEntity noteEntity = getNoteById(id);
        if (noteEntity.getDust()) {
            dynamoDBMapper.delete(getNoteById(id));
        } else {
            noteEntity.setDust(true);
            insert(noteEntity);
        }
    }

    public List<NoteEntity> getAllNotes() {
        return dynamoDBMapper.scan(NoteEntity.class, new DynamoDBScanExpression());
    }
}