import React, { Component } from "react";

const NavBar = (props) => {
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <div className="bg-dark">
        <span className="navbar-brand text-white mb-0 h1 ms-2">
          Cart
          <span>
            {props.totalCount > 0 && (
              <span className="badge bg-secondary ms-2">
                {props.totalCount}
              </span>
            )}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
