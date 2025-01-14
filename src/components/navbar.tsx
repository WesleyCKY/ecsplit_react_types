import React from 'react';
import { useState, useEffect } from "react";
import "../App.scss"
import "../styles/navbar.scss";

interface NavBarProps {
  brandName: string;
  navItems: { href: string; label: string }[];
}

function NavBar({ brandName, navItems }: NavBarProps) {
    function getNavItemIndex(href) {
        return navItems.findIndex(item => item.href === href);
    }
    const location = window.location.pathname
    const [selectedIndex, setSelectedIndex] = useState(getNavItemIndex(location));

    useEffect(() => {
       
        console.log(location);
        // Open and Close Navbar Menu
        const navbarMenu = document.getElementById("menu");
        const burgerMenu = document.getElementById("burger");
        const bgOverlay = document.querySelector(".nav-overlay");

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
        document.querySelectorAll(".nav-menu-link").forEach((link) => {
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
        const searchBlock = document.querySelector(".nav-search-block");
        const searchToggle = document.querySelector(".nav-search-toggle");
        const searchCancel = document.querySelector(".nav-search-cancel");

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
    <header className="nav-header" id="header">
         <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'></link>
    <nav className="navbar container">
        <a href={navItems[selectedIndex].href} className="brand">{brandName}  { "-" } {navItems[selectedIndex].label}</a>
        <div className="nav-burger" id="burger">
            <span className="nav-burger-line"></span>
            <span className="nav-burger-line"></span>
            <span className="nav-burger-line"></span>
        </div>
        <span className="nav-overlay"></span>
        <div className="nav-menu" id="menu">
            <ul className="nav-menu-inner">
                {navItems.map((item, index) => (
                    <li
                        className={`nav-menu-item ${selectedIndex === index ? 'active' : ''}`}
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                            
                        }}
                    >
                        <a className="nav-menu-link" href={item.href}>{item.label}</a>
                  </li>
                ))}
                
            </ul>
        </div>
        <span><i className="bx bx-search nav-search-toggle"></i></span>
        <div className="nav-search-block">
            <form className="nav-search-form">
                <span><i className="bx bx-arrow-back nav-search-cancel"></i></span>
                <input type="search" name="nav-search" className="nav-search-input" placeholder="Search here..." />
            </form>
        </div>
    </nav>
    </header>
  );
}

export default NavBar;
