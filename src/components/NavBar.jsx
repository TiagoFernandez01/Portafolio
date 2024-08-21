import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { useEffect } from "react";
const NavBar = () => {

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
        <>
            <div className="w-full text-white rounded-lg p-4 grid md:grid-cols-12 gap-4 items-center justify-center">
                <h1 className="md:col-span-2 flex justify-center md:justify-start font-bold cursor-pointer text-3xl">
                    TFZ
                </h1>
                <nav className="md:col-span-8 flex items-center gap-4 justify-center">
                    
                <a
                        href="#inicio"
                        className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Inicio
                    </a>
                  
                    <a
                        href="#proyects"
                        className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Proyectos
                    </a>
                    <a
                        href="#about-me"
                        className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Sobre Mi
                    </a>
                    <a
                        href="#skills"
                        className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="xl:py-1 xl:px-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        Contacto
                    </a>
                </nav>
                <div className="md:col-span-2 flex items-center justify-center md:justify-end gap-4">
                    {/* <a href="#">
          <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
          </svg>
      </a> */}
                    <Link to='https://www.linkedin.com/in/tiago-fernandez-75752823b/' target="_blank">
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {/* <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path> */}
                            <BsLinkedin />
                        </svg>
                    </Link>


                    <Link to='https://github.com/TiagoFernandez01' target="_blank">
                        <svg
                            className="w-6 h-6 fill-current"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <BsGithub />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default NavBar;