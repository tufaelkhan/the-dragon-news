import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>All Category</h2>
            <div>
                {
                    catagories.map(catagorie => <p
                        key={catagorie.id}
                    >
                        <Link to={`/catagorie/${catagorie.id}`} className='text-decoration-none text-black'>{catagorie.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;