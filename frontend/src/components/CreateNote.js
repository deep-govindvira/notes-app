import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

export const CreateNote = () => {

    const Create = async (title, description, color, date, dust) => {
        if (!title) {
            alert("Please Give title");
            return
        }
        const response = await axios.post('http://localhost:8080/note', {
            title,
            description,
            color,
            date,
            dust
        });
        window.location.href = '/Note/' + response.data.id;
    };

    return (
        <div class="d-flex flex-column flex-wrap p-2">
            <div class='d-flex p-3 flex-row'>
                <div>
                    <img style={{
                        marginTop: '10px',
                        marginRight: '20px'
                    }} src='/tag.png' width={'30px'} height={'30px'}></img>
                </div>
                <div style={{
                    width: '1438px'
                }}>
                    <input style={{
                        fontSize: '25px',
                        fontWeight: 'bold'
                    }} class='form-control' id='Title' placeholder='Title' spellcheck="false"></input>
                </div>
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
                        fontSize: '22px',
                    }} class='btn btn-outline-primary' onClick={() => {
                        Create(
                            document.getElementById('Title').value,
                            document.getElementById('Description').value,
                            document.getElementById('Color').value,
                            (new Date()).toLocaleString(),
                            false
                        )
                    }}>
                        <img src='/innovation.png' width={'30px'} height={'30px'} style={{
                            marginRight: '10px',
                            marginBottom:'5px'
                        }}></img>
                        Create
                    </button>
                </div>
                <div class='d-flex p-3 flex-row'>
                    <img src='/colour.png' width={'30px'} height={'30px'} style={{
                        marginRight: '10px',
                        marginTop: '10px'
                    }}></img>
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