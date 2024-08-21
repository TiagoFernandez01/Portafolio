import React from "react";
import { useEffect } from "react";

const FooterBottom = () => {

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const target = document.querySelector(this.getAttribute('href'));

                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Limpiar el event listener cuando el componente se desmonta
        return () => {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.removeEventListener('click', function (e) {
                    e.preventDefault();

                    const target = document.querySelector(this.getAttribute('href'));

                    window.scrollTo({
                        top: target.offsetTop,
                        behavior: 'smooth'
                    });
                });
            });
        };
    }, []);

    return (
        <footer className="bg-[#111827] rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023 <a href="https://flowbite.com/" className="hover:underline">Tiago Fernandez™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#inicio" className="hover:underline me-4 md:me-6">Inicio</a>
                    </li>
                    <li>
                        <a href="#proyects" className="hover:underline me-4 md:me-6">Proyectos</a>
                    </li>
                    <li>
                        <a href="#about-me" className="hover:underline me-4 md:me-6">Sobre Mi</a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:underline">Skills</a>
                    </li>
                    
                </ul>
            </div>
        </footer>
    );
}

export default FooterBottom;
