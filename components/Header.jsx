import React from 'react';
 import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <h1>CODESTART</h1>
            <main>
                <Link  to="/#Home">Home</Link>
                <Link smooth to="/#Contact">Contact</Link>
                <Link smooth to="/#About">About</Link>
                <Link smooth to="/#Brands">Brands</Link>          
                
                
                
            </main>
        </nav>
    )
}

export default Header
