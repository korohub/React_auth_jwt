import React from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';
import Home from "./pages/Home";
import { useEffect, useState } from 'react';

function App() {
    const [name, setName] =  useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                method: "GET",
                headers: {'Content-type': 'application/json'},
                credentials: 'include',
                
                });
                const content = await response.json();

                setName(content.name);

            }
        )();
    });


  return (
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName} />
          <main className="form-signin">
            <Route path="/" exact component={() => <Home name={name}/>}/>
            <Route path="/login" component={() => <Login setName={setName}/>}/>
            <Route path="/register" component={Register}/>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
