package com.notes.app.datastore.dao;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.notes.app.datastore.entity.NoteEntity;

import java.util.List;

public class NoteEntityDao {
    AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard()
            .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration("http://localhost:8000", "us-west-2"))
            .withCredentials(new AWSStaticCredentialsProvider(new BasicAWSCredentials("id", "pass")))
            .build();

    DynamoDBMapper dynamoDBMapper = new DynamoDBMapper(client);
    public void insert(final NoteEntity noteEntity) {
//        CreateTableRequest createTableRequest = dynamoDBMapper.generateCreateTableRequest(NoteEntity.class);
//        createTableRequest.setProvisionedThroughput(new ProvisionedThroughput(1L, 1L)); // Set desired throughput
//        client.createTable(createTableRequest);

        dynamoDBMapper.save(noteEntity);
    }

    public NoteEntity getNoteById(final String id) {
        final NoteEntity noteEntity = NoteEntity.builder()
                .id(id)
                .build();
        return dynamoDBMapper.load(noteEntity);
    }

    public void deleteNoteById(final String id) {
        dynamoDBMapper.delete(getNoteById(id));
    }

    public List<NoteEntity> getAllNotes() {
        return dynamoDBMapper.scan(NoteEntity.class, new DynamoDBScanExpression());
    }
}