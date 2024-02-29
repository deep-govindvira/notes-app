import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

export const CreateNote = () => {

    const Create = async (title, description, color, date) => {
        if (!title) {
            alert("Please Give title");
            return
        }
        const response = await axios.post('http://localhost:8080/note', {
            title,
            description,
            color,
            date
        });
        window.location.href = '/Note/' + response.data.id;
    };

    return (
        <div class="d-flex flex-column flex-wrap p-2">
            <div class="p-3">
                <input style={{
                    fontSize: '25px',
                    fontWeight:'bold'
                }} class='form-control' id='Title' placeholder='Title' spellcheck="false"></input>
            </div>
            <div class="p-3">
                <textarea style={{
                    height: '400px',
                    fontSize: '20px'
                }} class='form-control' id='Description' placeholder='Description' spellcheck="false"></textarea>
            </div>
            <div class="d-flex flex-row flex-wrap">
                <div class='p-3'>
                    <button style={{
                        fontSize:'22px',
                    }} class='btn btn-success' onClick={() => {
                        Create(
                            document.getElementById('Title').value,
                            document.getElementById('Description').value,
                            document.getElementById('Color').value,
                            (new Date()).toLocaleString()
                        )
                    }}>Create</button>
                </div>
                <div class='p-3'>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id='Color' defaultValue='white'>
                        <option value="white">White</option>
                        <option value="#FFCCCB">Red</option>
                        <option value="lightblue">Blue</option>
                        <option value="lightgreen">Green</option>
                        <option value="lightyellow">Yellow</option>
                        <option value="#FFD580">Orange</option>
                        <option value="#CBC3E3">Purple</option>
                        <option value="black">Black</option>
                    </select>
                </div>
            </div>
        </div>
    );
}