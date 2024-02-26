import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function NoteInput() {
    const [note, setNote] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:8080/note', {
                note,
                content
            });
            console.log('Response:', response.data);
            // alert('Note sent successfully!');
        } catch (error) {
            console.error('Error sending note:', error);
            setError('Failed to send note');
        }

        setLoading(false);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <form onSubmit={handleSubmit} >
                <div class="form-group" style={{
                    margin: '10px'
                }}>
                    <h1 style={{
                        textAlign: 'center'
                    }}>Note</h1>
                </div>
                <div class="form-group" style={{
                    margin: '10px'
                }}>
                    <input
                        style={{
                            width: '700px',
                        }}
                        class="form-control"
                        type="text"
                        placeholder="Title"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                </div>
                <div class="form-group" style={{
                    margin:'10px'
                }}>
                    <textarea
                        class="form-control"
                        placeholder="Description"
                        rows={10}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div class="form-group" style={{
                    margin:'10px'
                }}>
                    <button type="submit" class="form-control btn btn-primary" disabled={loading}>
                        {loading ? 'Sending...' : 'Add'}
                    </button>
                </div>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default NoteInput;
