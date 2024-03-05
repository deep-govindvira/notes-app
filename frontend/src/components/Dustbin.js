import { click } from '@testing-library/user-event/dist/click';
import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

export const Dustbin = () => {
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
        (note.title && note.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (note.description && note.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const Open = async (id) => {
        window.location.href = '/Note/' + id;
    };

    return (
        <div class='d-flex flex-column flex-wrap p-2'>
            <div class='d-flex p-3 flex-row'>
                <div>
                    <img style={{
                        marginTop: '10px',
                        marginRight: '20px'
                    }} src='/loupe.png' width={'30px'} height={'30px'}></img>
                </div>
                <div style={{
                    width: '1438px'
                }}>
                    <input class='form-control'
                        style={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                        }}
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div class='d-flex flex-wrap p-2'>
                {filteredData.map(note => note.dust ? (
                    <div style={{
                        cursor: 'pointer'
                    }} onClick={() => Open(note.id)} class='d-flex flex-column  flex-wrap p-2' key={note.id} >
                        <span class="border border-secondary rounded" style={{
                            borderColor: note.color,
                            backgroundColor: note.color,
                        }}>
                            <div class='d-flex  mb-3 flex-wrap p-2' style={{
                                // border: '0px',
                                borderColor: note.color,
                                backgroundColor: note.color,
                                maxWidth: '230px',
                                maxHeight: '250px',
                                width: '230px',
                                height: '250px',
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}>
                                <h2 class='navbar-brand' style={{
                                    borderColor: note.color,
                                    backgroundColor: note.color,
                                    color: note.color == 'black' ? 'white' : 'black',
                                    fontSize: '25px',
                                    fontWeight: '450',
                                    textAlign: 'center',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    border: '0px',
                                    overflow: 'hidden',
                                    width: '210px',
                                    resize: 'none',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis'
                                }}>{note.title}</h2>

                                <textarea style={{
                                    borderColor: note.color,
                                    backgroundColor: note.color,
                                    color: note.color == 'black' ? 'white' : 'black',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    width: '210px',
                                    height: '200px',
                                    resize: 'none',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis'
                                }} class='navbar-brand multi-line-paragraph' spellcheck="false">{note.description}</textarea>
                            </div>
                        </span>
                    </div>
                ) : (<div></div>))}
            </div>
        </div>

    );
}