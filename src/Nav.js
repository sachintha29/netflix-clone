import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div class={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="/logo.png" alt="Netflix Logo" />
      <img
        className="nav__avatar"
        src="https://assets.dryicons.com/uploads/icon/svg/8841/63a0a827-681d-4160-963c-efdbdbfc0c46.svg"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
