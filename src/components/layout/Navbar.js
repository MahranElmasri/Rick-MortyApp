import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div data-test="navbar" className="navbar bg-primary">
      <h2>
        <Link className="logo" to="/">
          {" "}
          Rick & Morty App
        </Link>
      </h2>
    </div>
  );
}
