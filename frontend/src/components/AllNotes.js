import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllNotes() {

    async function handleUpdate(id, title, description) {
        const response = await axios.put('http://localhost:8080/note/' + id, {
            title,
            description
        });
        window.location.reload();
    };

    async function DeleteNote(id) {
        const response = await axios.delete('http://localhost:8080/note/' + id);
        window.location.reload();
    };

    const [Notes, setNotes] = useState(null);

    useEffect(() => {
        getAllNotes();
    }, []);

    async function getAllNotes() {
        const response = await fetch('http://localhost:8080/note/allNotes');
        const jsonNotes = await response.json();
        setNotes(jsonNotes);
    };

    const renderNotes = () => {
        if (!Notes) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h1></h1>
                <ul>
                    {Notes.map(Note => (
                        <div key={Note.id} style={{
                            margin: '50px'
                        }}>
                            <div className="col-sm">
                                <table className='table table-hover' style={{
                                    border: '0px white'
                                }}>
                                    <tbody>
                                        <tr scope="row">
                                            <td>
                                                <input
                                                    id={'Title' + Note.id}
                                                    style={{
                                                        fontSize: '25px',
                                                        width: '700px'
                                                    }}
                                                    class="form-control"
                                                    type="text"
                                                    placeholder="Title"
                                                    defaultValue={Note.title}
                                                />
                                            </td>
                                            <td align='right'>
                                                <button
                                                    onClick={() => handleUpdate(Note.id, document.getElementById('Title' + Note.id).value, document.getElementById(Note.id + 'Description').value)}
                                                    style={{
                                                        marginRight: '50px'
                                                    }} className='btn btn-success'>Update</button>
                                                <button
                                                    onClick={() => DeleteNote(Note.id)}
                                                    className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <textarea id={Note.id + 'Description'} class="form-control" defaultValue={Note.description} rows={5}
                                                ></textarea>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    };

    return <div>{renderNotes()}</div>;
}

export default AllNotes;
