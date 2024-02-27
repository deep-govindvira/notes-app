import React, { useState, useEffect } from 'react';

function AllNotes() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/note/allNotes');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderData = () => {
        if (!data) {
            return <p>Loading...</p>;
        }

        return (
            <div>
                <h1></h1>
                <ul>
                    {data.map(item => (
                        <div key={item.id} style={{
                            margin:'100px'
                        }}>
                            <div class="col-sm">
                                <h4>{item.title}</h4>
                                <textarea class="form-control" value={item.description} rows={5}>Description:</textarea>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    };

    return <div>{renderData()}</div>;
}

export default AllNotes;
