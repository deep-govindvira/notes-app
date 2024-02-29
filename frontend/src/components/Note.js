import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Note = () => {
    const { noteId } = useParams(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/note/' + noteId)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data);
            })
    }, []);

    const Update = async (id, title, description, color, date) => {
        if (!title) {
            alert("Please Give title");
            return
        }
        const response = await axios.put('http://localhost:8080/note/' + id, {
            title,
            description,
            color,
            date
        });
        window.location.reload();
    };

    const Delete = async (id) => {
        const response = await axios.delete('http://localhost:8080/note/' + id, {
        });
        window.location.href = '/Notes';
    };

    return data ? (
        <div class='d-flex flex-column  flex-wrap p-2'>
            <div class="p-3">
                <input style={{
                    fontSize: '25px'
                }} class='form-control' id='Title' placeholder='Title' defaultValue={data.title} spellcheck="false" />
            </div>
            <div class="p-3">
                <textarea style={{
                    fontFamily: 'Verdana',
                    height: '400px'
                }} class='form-control' id='Description' placeholder='Description' defaultValue={data.description} spellcheck="false" />
            </div>
            <div class="d-flex flex-row flex-wrap">
                <div class="p-3">
                    <button style={{
                        fontSize: '22px'
                    }} class='btn btn-warning' onClick={() => Update(
                        noteId,
                        document.getElementById('Title').value,
                        document.getElementById('Description').value,
                        document.getElementById('Color').value,
                        (new Date()).toLocaleString()
                    )}>Save</button>
                </div>
                <div class='p-3'>
                    <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id='Color' defaultValue={data.color}>
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
                <div class='p-3'>
                    <p style={{
                        fontSize: '22px',
                        fontFamily: 'Verdana',
                    }} class='form-control' id='date'>Time : {data.date}</p>
                </div>
                <div class="p-3">
                    <button style={{
                        fontSize: '22px'
                    }} class='btn btn-danger' onClick={() => Delete(
                        noteId
                    )}>Delete</button>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <p>Invalid Note Id</p>
        </div>
    );
}