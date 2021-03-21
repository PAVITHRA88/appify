import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        GuessWords
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          {!user && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
              </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
              </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/entergame">
                  Enter Game
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user">
                  User
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/logout">
                  Logout
              </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {user && <div className="mr-auto ml-3">{user.name}</div>}
    </nav>
  );
};

export default NavBar;
