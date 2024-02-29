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

    const Update = async (id, title, description) => {
        if (!title) {
            alert("Please Give title");
            return
        }
        const response = await axios.put('http://localhost:8080/note/' + id, {
            title,
            description
        });
        window.location.reload();
    };

    const Delete = async (id) => {
        const response = await axios.delete('http://localhost:8080/note/' + id, {
        });
        window.location.href = '/Notes';
    };

    return data ? (
        <div class='d-flex flex-column bd-highlight flex-wrap p-2'>
            {/* <div class="p-3"> */}
            {/* <input class='form-control' id='Id' defaultValue={data.id} disabled /> */}
            {/* </div> */}
            <div class="p-3">
                <input style={{
                    fontSize:'25px'
                }} class='form-control' id='Title' placeholder='Title' defaultValue={data.title} />
            </div>
            <div class="p-3">
                <textarea style={{
                    height:'250px'
                }} class='form-control' id='Description' placeholder='Description' defaultValue={data.description} />
            </div>
            <div class="d-flex flex-row flex-wrap">
                <div class="p-3">
                    <button class='btn btn-warning' onClick={() => Update(
                        noteId,
                        document.getElementById('Title').value,
                        document.getElementById('Description').value
                    )}>Update</button>
                </div>
                <div class="p-3">
                    <button class='btn btn-danger' onClick={() => Delete(
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