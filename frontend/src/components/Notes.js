import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

const Notes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/note/allNotes')
            .then(response => {
                return response.json();
            })
            .then(data => {
                setData(data);
            })
    }, []);

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div class='d-flex flex-column bd-highlight flex-wrap p-2'>
            <div class='p-3'>
                <input class='form-control'
                    style={{
                        fontSize: '25px'
                    }}
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div class='d-flex bd-highlight flex-wrap p-2'>
                {filteredData.map(note => (
                    <div class='d-flex flex-column bd-highlight flex-wrap p-2' key={note.id}>
                        <span class="border border-secondary rounded">
                            <div class='d-flex flex-column bd-highlight flex-wrap p-2'>
                                {/* <a class='navbar-brand' href={'/Note/' + note.id}>{note.id}</a> */}
                                <a class='navbar-brand' style={{
                                    fontWeight: 'bold',
                                    fontSize: '25px'
                                }} href={'/Note/' + note.id}>{note.title}</a>
                                <a style={{
                                    width: '200px',
                                    height: '200px'
                                }} class='navbar-brand' href={'/Note/' + note.id}>{note.description}</a>
                            </div>
                        </span>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Notes;
