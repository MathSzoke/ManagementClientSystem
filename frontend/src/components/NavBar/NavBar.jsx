import React, { useState, useEffect } from 'react';
import { GiBroom } from 'react-icons/gi';
import './NavBar.css';

export function NavBar() {
    useEffect(() => {
        const handleNavClick = (event) => {
            event.preventDefault(); // Evita a navegação padrão do link
            const target = event.target.closest("li"); // Encontra o elemento <li> mais próximo
            if (target) {
                const a = target.querySelector("a"); // Encontra o elemento <a> dentro do <li>
                const href = a.getAttribute('href');
                setActiveNav(href);
                showSection(href);
                updateNav(a);
            }
        };

        const nav = document.querySelector(".navbar");
        const navList = nav.querySelectorAll("li");
        const allSection = document.querySelectorAll(".section");

        const showSection = (href) => {
            const sectionId = href.split("#")[1];
            const section = document.getElementById(sectionId);
            allSection.forEach(section => section.classList.remove("active"));
            section.classList.add("active");
        };

        const updateNav = (target) => {
            navList.forEach(navItem => navItem.querySelector("a").classList.remove("active"));
            target.classList.add("active");
        };

        navList.forEach(navItem => {
            navItem.addEventListener("click", handleNavClick);
        });

        return () => {
            navList.forEach(navItem => {
                navItem.removeEventListener("click", handleNavClick);
            });
        };
    }, []);

    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav className="navbar" id="aside">
            <div style={{ padding: "2em 0 5em", transform: "scaleX(-1)" }}>
                <GiBroom size="6em" color='white' />
            </div>
            <li className='navbar-button'><a href="#About" className={activeNav === '#About' ? 'active' : ''} title="About">Sobre</a></li>
            <li className='navbar-button'><a href="#Register" className={activeNav === '#Register' ? 'active' : ''} title="Register Client">Registrar</a></li>
            <li className='navbar-button'><a href="#Route" className={activeNav === '#Route' ? 'active' : ''} title="Route Client">Mapear Clientes</a></li>
        </nav>
    );
}
