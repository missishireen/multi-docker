import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            I am some other page! changed!!!
            <Link to="/" >Go back home</Link>
        </div>
    );
};