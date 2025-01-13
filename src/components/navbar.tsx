import React from 'react';
import { useState, useEffect } from "react";
import "../App.scss"

interface NavBarProps {
  brandName: string;
  navItems: { href: string; label: string }[];
}

function NavBar({ brandName, navItems }: NavBarProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        
        // Open and Close Navbar Menu
        const navbarMenu = document.getElementById("menu");
        const burgerMenu = document.getElementById("burger");
        const bgOverlay = document.querySelector(".overlay");

        if (burgerMenu && bgOverlay) {
        burgerMenu.addEventListener("click", () => {
            if (navbarMenu) {
                navbarMenu.classList.add("is-active");
            }
            bgOverlay.classList.toggle("is-active");
        });

        bgOverlay.addEventListener("click", () => {
            if (navbarMenu) {
                navbarMenu.classList.remove("is-active");
            }
            bgOverlay.classList.toggle("is-active");
        });
        }

        // Close Navbar Menu on Links Click
        document.querySelectorAll(".menu-link").forEach((link) => {
        link.addEventListener("click", () => {
            if (navbarMenu) {
                navbarMenu.classList.remove("is-active");
            }
            if (bgOverlay) {
                bgOverlay.classList.remove("is-active");
            }
        });
        });

        // Open and Close Search Bar Toggle
        const searchBlock = document.querySelector(".search-block");
        const searchToggle = document.querySelector(".search-toggle");
        const searchCancel = document.querySelector(".search-cancel");

        if (searchToggle && searchCancel) {
            searchToggle.addEventListener("click", () => {
                if (searchBlock) {
                    searchBlock.classList.add("is-active");
                }
            });

            searchCancel.addEventListener("click", () => {
                if (searchBlock) {
                    searchBlock.classList.remove("is-active");
                }
            });
        }
    }, []);

    


  return (
    <header className="header" id="header">
         <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
    <nav className="navbar container">
        <a href="./index.html" className="brand">{brandName}  { "-" } {navItems[selectedIndex].label}</a>
        <div className="burger" id="burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
        </div>
        <span className="overlay"></span>
        <div className="menu" id="menu">
            <ul className="menu-inner">
                {navItems.map((item, index) => (
                    <li
                        className={`menu-item ${selectedIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <a className="menu-link" href={item.href}>{item.label}</a>
                  </li>
                ))}
                
            </ul>
        </div>
        <span><i className="bx bx-search search-toggle"></i></span>
        <div className="search-block">
            <form className="search-form">
                <span><i className="bx bx-arrow-back search-cancel"></i></span>
                <input type="search" name="search" className="search-input" placeholder="Search here..." />
            </form>
        </div>
    </nav>
    </header>
  );
}

export default NavBar;
