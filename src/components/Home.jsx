import React from "react";
//import foto from '../assets/imgs/perfil.png'
import linkedin from '../assets/imgs/linkedin.png'
import github from '../assets/imgs/github.png'
import programmerGif from '../assets/imgs/programmer.gif'
import gif from '../assets/imgs/undraw_Developer.png'
import { Link } from "react-router-dom";
import Cards from "./Cards.jsx";
import Abilities from "./abilities.jsx"
import ContacUs from "./ContactUs.jsx"
import '../Styles/styles.css';



const Home = () => {


        return (
            <>
                <body className="w-full p">
                    <header>
                        <div>
                            <div className="flex  flex-col mt-16 items-center bg-gray-900 gap-2 px-4" id="inicio">
                                <h1 className="text-6xl font-bold text-cyan-600 font-font2 ">Tiago Fernandez</h1>
                                <span className="typing-animation lg:text-2xl md:text-2xl sm:text-xl text-white my-4 font-font1"> Desarrollador Web Full Stack.</span>


                                <div className=" my-8 flex space-x-9">
                                    <Link to='https://www.linkedin.com/in/tiago-fernandez-75752823b/' target="_blank">
                                        <img class=" w-12" src={linkedin} alt="linkedin logo" />
                                    </Link>
                                    <Link to='https://github.com/TiagoFernandez01' target="_blank">
                                        <img class=" w-12" src={github} alt="github logo" />
                                    </Link>
                                </div>

                                <img class="rounded-full w-96 h-96" src={linkedin} alt="foto perfil" />

                                <button class="button mt-8" type="button">
                                    <span class="button__text">Curriculum</span>
                                    <a href="/curriculum.pdf" target="_blank" class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></a>
                                </button>
                            </div>


                        </div>

                    </header>

                    <main className="mt-20" id="proyects">
                        <div>
                            <div className="p-4 flex flex-col">
                                <div className="mb-6 font-bold text-cyan-600 text-5xl">
                                    <h3 className="ml-4 font-font2">Proyectos</h3>
                                </div>
                                <div>
                                    <Cards />
                                </div>
                            </div>
                        </div>
                    </main>

                    <div>

                        <div className="mt-20 bg-[#94B4FF] p-4" id="about-me">
                            <div className="flex justify-end p-4 mb-6 text-black font-bold text-5xl font-font2">
                                <h3>Sobre Mi</h3>
                            </div>

                            <div className="lg:grid lg:grid-cols-2 lg:justify-center lg:p-6 lg:justify-items-center lg:content-center lg:my-12 sm:flex sm:flex-col">
                                <div className=" text-black  gap-5 font-font2 ">
                                    <h4 className="my-6 text-4xl">Hola, soy Tiago! </h4>

                                    <p className="text-3xl">Prácticamente he estado siempre con la computadora, es algo que me gusta mucho, y siempre
                                        me preguntaba como es que funcionaba y se creaba todo lo que veía en pantalla.
                                        Es así como la curiosidad me llevo a estudiar el rubro de la programación y formarme
                                        como Desarrollador Full Satack.

                                    </p>
                                </div>

                                <div className="lg:w-[550px] sm:w-full">
                                    <img className="" src={gif} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="my-4" id="skills">
                        <Abilities />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full bg-[#94B4FF] align-middle pb-12">

                        <div className="flex flex-col justify-start pt-24 items-center">

                            <img class="remove-bg h-auto max-w-lg rounded-lg" src={programmerGif} alt="image description" />
                            <div className="p-2 mt-4 flex justify-center gap-4 flex-wrap font-font1 font-bold">
                                <p className="border-solid border-2 p-2 rounded-3xl border-blue-900">Desarrollo Front End</p>
                                <p className="border-solid border-2 p-2 rounded-3xl border-blue-900">React</p>
                                <p className="border-solid border-2 p-2 rounded-3xl border-blue-900">Diseño</p>
                                <p className="border-solid border-2 p-2 rounded-3xl border-blue-900">Desarrollo Back End</p>
                                <p className="border-solid border-2 p-2 rounded-3xl border-blue-900">Starts Up</p>
                                <p className="border-solid border-2 p-2 rounded-3xl border-blue-900">Nuevas oportunidades</p>
                                <p className="border-solid border-2 p-2 rounded-3xl border-blue-900">Café☕❤</p>

                            </div>


                        </div>

                        <div id="contact">
                            <ContacUs />
                        </div>
                    </div>
                </body>



            </>
        )

    }


export default Home;