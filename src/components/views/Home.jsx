import React from "react";
import foto from '../../assets/imgs/perfil.jpg'
import linkedin from '../../assets/imgs/linkedin.png'
import github from '../../assets/imgs/github.png'
import gif from '../../assets/imgs/gif.gif'
import { Link } from "react-router-dom";
import Cards from "./Cards.jsx";
import Abilities from "../abilities.jsx"
import '../../Styles/animations.css';

const Home = () => {

    return (
        <>
            <body className="w-full">
                <section>
                    <div className="flex  flex-col mt-16 items-center bg-gray-900 gap-2 px-4">
                        <h1 className="text-6xl font-bold text-cyan-600 font-font2 ">Tiago Fernandez</h1>
                        <span className="typing-animation lg:text-2xl md:text-2xl sm:text-xl text-white my-4 font-font1"> Desarrollador Web Full Stack.</span>
                       

                        <div className=" mb-16 mt-8 flex space-x-9">
                            <Link to='https://www.linkedin.com/in/tiago-fernandez-75752823b/'>
                                <img class=" w-12" src={linkedin} alt="linkedin logo" />
                            </Link>
                            <Link to='https://github.com/TiagoFernandez01'>
                                <img class=" w-12" src={github} alt="github logo" />
                            </Link>
                        </div>
                        <img class="rounded-full w-96 h-96" src={foto} alt="foto perfil" />
                    </div>
                </section>

                <main className="mt-20">
                    <div>
                        <div className="p-4 flex flex-col">
                            <div className="mb-6 font-bold text-cyan-600 text-5xl">
                                <h3 className="ml-4 font-font2">Mis proyectos</h3>
                            </div>
                            <div>
                                <Cards />
                            </div>
                        </div>
                    </div>
                </main>

                <section>

                    <div className="mt-20 bg-[#5487ff] p-4">
                        <div className="flex justify-end p-4 mb-6 text-blue-950 font-bold text-5xl font-font2">
                            <h3>Sobre Mi</h3>
                        </div>

                        <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:p-6 lg:justify-items-center lg:content-center lg:my-12 sm:flex sm:flex-col">
                            <div className=" text-white  gap-5 font-font2 ">
                                <h4 className="my-6 text-4xl">Hola, soy Tiago! </h4>

                                <p className="text-3xl">Prácticamente he estado siempre con la computadora, es algo que me gusta mucho, y siempre
                                    me preguntaba como es que funcionaba y se creaba todo lo que veía en pantalla.
                                    Es así como la curiosidad me llevo a estudiar el rubro de la programación.
                                    Hoy en día soy desarrollador web FullStack (aunque me gusta mas el front😁).
                                </p>
                            </div>

                            <div className="lg:w-[550px] sm:w-full">
                                <img className="" src={gif} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <div>
                    <Abilities />
                </div>
            </body>



        </>
    )

}

export default Home;