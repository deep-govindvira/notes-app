import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Markdown from 'react-markdown';

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

    const Update = async (id, title, description, color, date, dust) => {
        if (!title) {
            alert("Please Give title");
            return
        }
        const response = await axios.put('http://localhost:8080/note/' + id, {
            title,
            description,
            color,
            date,
            dust
        });
        window.location.reload();
    };

    const Delete = async (id) => {
        const response = await axios.delete('http://localhost:8080/note/' + id, {
        });
        if(data.dust) {
            window.location.href = '/Dustbin';
        }
        else {
            window.location.href = '/Notes';
        }
    };

    return data ? (
        <div class='d-flex flex-column  flex-wrap p-2'>
            <div class="p-3">
                {data.dust ? <input style={{
                    fontSize: '25px',
                    fontWeight: 'bold'
                }} class='form-control' id='Title' placeholder='Title' defaultValue={data.title} spellcheck="false" disabled /> :
                    <input style={{
                        fontSize: '25px',
                        fontWeight: 'bold'
                    }} class='form-control' id='Title' placeholder='Title' defaultValue={data.title} spellcheck="false" />}
            </div>
            {/* <div class="p-3">
                <Markdown>
                    {data.description}
                </Markdown>
            </div> */}
            <div class="p-3">
                {data.dust ? <textarea style={{
                    height: '400px',
                    fontSize: '20px',
                }} class='form-control' id='Description' placeholder='Description' defaultValue={data.description} spellcheck="false" disabled /> :
                    <textarea style={{
                        height: '400px',
                        fontSize: '20px'
                    }} class='form-control' id='Description' placeholder='Description' defaultValue={data.description} spellcheck="false" />}
            </div>
            <div class="d-flex flex-row flex-wrap">
                <div class="p-3">
                    {data.dust ?
                        <button style={{
                            fontSize: '22px'
                        }} class='btn btn-outline-success' onClick={() => Update(
                            noteId,
                            document.getElementById('Title').value,
                            document.getElementById('Description').value,
                            document.getElementById('Color').value,
                            (new Date()).toLocaleString(),
                            false
                        )}>Restore</button>
                        :
                        <button style={{
                            fontSize: '22px'
                        }} class='btn btn-outline-success' onClick={() => Update(
                            noteId,
                            document.getElementById('Title').value,
                            document.getElementById('Description').value,
                            document.getElementById('Color').value,
                            (new Date()).toLocaleString(),
                            false
                        )}>Save</button>
                    }
                </div>
                <div class='p-3'>
                    {data.dust ? <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id='Color' defaultValue={data.color} disabled>
                        <option value="white">White</option>
                        <option value="#FFCCCB">Red</option>
                        <option value="lightblue">Blue</option>
                        <option value="lightgreen">Green</option>
                        <option value="lightyellow">Yellow</option>
                        <option value="#FFD580">Orange</option>
                        <option value="#CBC3E3">Purple</option>
                        <option value="black">Black</option>
                    </select> : <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id='Color' defaultValue={data.color}>
                        <option value="white">White</option>
                        <option value="#FFCCCB">Red</option>
                        <option value="lightblue">Blue</option>
                        <option value="lightgreen">Green</option>
                        <option value="lightyellow">Yellow</option>
                        <option value="#FFD580">Orange</option>
                        <option value="#CBC3E3">Purple</option>
                        <option value="black">Black</option>
                    </select>}
                </div>
                <div class='p-3'>
                    <p style={{
                        fontSize: '22px',
                    }} class='form-control' id='date'>Time : {data.date}</p>
                </div>
                <div class="p-3">
                    {data.dust ? <button style={{
                        fontSize: '22px'
                    }} class='btn btn-outline-danger' onClick={() => Delete(
                        noteId
                    )}>Delete</button> :
                        <button style={{
                            fontSize: '22px'
                        }} class='btn btn-outline-warning' onClick={() => Delete(
                            noteId
                        )}>Remove</button>
                    }
                </div>
            </div>
        </div>
    ) : (
        <div>
            <p>Invalid Note Id</p>
        </div>
    );
}