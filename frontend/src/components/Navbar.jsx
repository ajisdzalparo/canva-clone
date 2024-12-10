import React, { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function closeMenuOnOutsideClick(e) {
    // Tutup menu jika klik di luar sidebar
    if (e.target.id === "menu-overlay") {
      setIsOpen(false);
    }
  }

  return (
    <nav className="bg-white drop-shadow-std min-w-[100vw]">
      <div className="flex justify-between items-center w-[95%] mx-auto py-3">
        {/* Logo dan Menu Button */}
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden material-symbols-outlined"
            onClick={toggleMenu}
          >
            menu
          </button>
          <img src="../src/assets/images/logo.svg" alt="logo" />
        </div>

        {/* Tombol Log in dan Sign up */}
        <div className="flex gap-3">
          <NavLink
            className="button-credentials lg:hover:bg-slate-100 lg:ring-slate-800 bg-primary lg:bg-white hover:bg-primaryHover text-white lg:text-slate-800"
            to="/login"
          >
            Log in
          </NavLink>
          <NavLink
            className="button-credentials bg-primary hover:bg-primaryHover text-white hidden lg:block"
            to="/signup"
          >
            Sign up
          </NavLink>
        </div>

        {/* Menu Mobile */}
        <div
          id="menu-overlay"
          className={`${
            isOpen
              ? "min-h-[100vh] min-w-[100vw] fixed top-0 left-0 bg-black bg-opacity-80 z-10"
              : "hidden"
          }`}
          onClick={closeMenuOnOutsideClick}
        >
          <div
            className={`fixed top-0 left-0 min-h-screen w-[80%] bg-white z-20 transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="w-full min-h-screen flex flex-col justify-between">
              <div className="flex flex-col mt-5 mx-5">
                <div className="flex justify-between py-2 px-2">
                  <NavLink
                    className=""
                    to="/"
                    onClick={() => setIsOpen(false)} // Tutup menu saat klik tautan
                  >
                    Home
                  </NavLink>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
                <div className="flex justify-between py-2 px-2">
                  <NavLink
                    className=""
                    to="/about"
                    onClick={() => setIsOpen(false)} // Tutup menu saat klik tautan
                  >
                    About
                  </NavLink>
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-3 mx-5 text-center mb-5">
                <NavLink
                  className="button-credentials hover:bg-slate-100 ring-slate-800"
                  to="/login"
                  onClick={() => setIsOpen(false)} // Tutup menu saat klik tautan
                >
                  Log in
                </NavLink>
                <NavLink
                  className="button-credentials bg-primary hover:bg-primaryHover text-white"
                  to="/signup"
                  onClick={() => setIsOpen(false)} // Tutup menu saat klik tautan
                >
                  Sign up
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};
