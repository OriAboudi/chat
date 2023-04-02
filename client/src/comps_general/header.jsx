import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
export default function Header() {
  return (
    <header className='container-fluid'>
      <div className="container row align-items-center ">
        <div className='logo col-auto'>
          <h2>Logo</h2>
        </div>
        <nav className='col-auto d-flex'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/socket">Socket</Link></li>
            <li><Link to="/realChat">Real Chat</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </div>
      
    </header>
  )
}
