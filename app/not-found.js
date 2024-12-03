
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className=' container'>
            <h2>
                Page not found!
            </h2>
            <h2>

                there is an error
            </h2>
            <Link href={"/"}>Home</Link>
            
        </div>
        
    );
}

export default NotFound;
