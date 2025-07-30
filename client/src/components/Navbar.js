
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import birdLogo from '../components/bird.png';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img src={birdLogo} alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
          <Link className="navbar-brand fw-bold text-uppercase" to="/">DraftNest</Link>
        </div>
        <div className="d-flex align-items-center">
          {token ? (
            <>
              <span className="me-3 text-white">Welcome, {name}</span>
              <Link className="btn btn-success me-2" to="/create">New Post</Link>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-outline-light me-2 hover-lift" to="/signin">Sign In</Link>
              <Link className="btn btn-success hover-lift" to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </div>


      <style>{`
        .hover-lift {
          transition: all 0.3s ease-in-out;
        }
        .hover-lift:hover {
          transform: translateY(-3px);
          background-color: #28a745 !important; /* Green hover for Sign In/Up */
          border-color: #28a745 !important;
          color: white !important;
        }
      `}</style>
    </nav>
  );
}