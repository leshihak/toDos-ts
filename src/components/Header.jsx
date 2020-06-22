import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-title">To Do List App</div>
      <Link className="linkStyle" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="linkStyle" to="/toDos">
        ToDos
      </Link>{" "}
      |{" "}
      <Link className="linkStyle" to="/signUp">
        Sign Up
      </Link>{" "}
      |{" "}
      <Link className="linkStyle" to="/contact">
        Contacts
      </Link>{" "}
      |{" "}
      <Link className="linkStyle" to="/about">
        About
      </Link>
    </header>
  );
}
