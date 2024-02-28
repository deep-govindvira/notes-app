import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

export const CreateNote = () => {

    const Create = async (title, description) => {
        if (!title) {
            alert("Please Give title");
            return
        }
        const response = await axios.post('http://localhost:8080/note', {
            title,
            description
        });
        window.location.href = '/Note/' + response.data.id;
    };

    return (
        <div class="d-flex flex-column">
            <div class="p-3">
                <input style={{
                    fontSize:'25px'
                }} class='form-control' id='Title' placeholder='Title'></input>
            </div>
            <div class="p-3">
                <textarea style={{
                    height:'250px'
                }} class='form-control' id='Description' placeholder='Description'></textarea>
            </div>
            <div class="p-3">
                <button class='btn btn-success' onClick={() => {
                    Create(
                        document.getElementById('Title').value,
                        document.getElementById('Description').value
                    )
                }}>Create</button>
            </div>
        </div>
    );
}