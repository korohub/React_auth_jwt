import React from 'react';
import {Link} from "react-router-dom";

const Nav = (props: {name: string, setName: (name: string) => void }) => {
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            credentials: 'include',
            
        });
        props.setName('');
    }
    
    let menu;

    if(props.name === ''){
        menu = (
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register</Link>
                    </li>
                
                </ul>
        )
    }else {
        menu = (
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link" onClick={logout}>logout</Link>
                    </li>
                    
                
                </ul>
        )
    }

    return(
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
            <Link to="/" className="navbar-brand">Home</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div>
                {menu}
                
            </div>
            </div>
        </nav>
    )
}

export default Nav;