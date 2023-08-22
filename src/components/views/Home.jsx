import React from "react";
import foto from '../../assets/imgs/perfil.jpg'
import linkedin from '../../assets/imgs/linkedin.png'
import github from '../../assets/imgs/github.png'
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {

    return (
        <>
            <body>
                <section>
                    <div className="flex  flex-col mt-16 items-center bg-gray-900 gap-2">
                        <h1 className="text-5xl font-bold text-cyan-600">Tiago Fernandez</h1>
                        <h2 className="text-2xl text-white mb-6"> Desarrollador Web Full Stack</h2>
                        <p className=" text-white p-2 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, unde quis eos cum fuga labore obcaecati voluptatum error.</p>

                        <div className="mb-24 mt-14 flex space-x-9">
                            <Link to='https://www.linkedin.com/in/tiago-fernandez-75752823b/'>
                                <img class=" w-12" src={linkedin} alt="image description" />
                            </Link>
                            <Link to='https://github.com/TiagoFernandez01'>
                                <img class=" w-12" src={github} alt="image description" />
                            </Link>
                        </div>
                        <img class="rounded-full w-96 h-96" src={foto} alt="image description" />
                    </div>
                </section>

                <section className="mt-12">
                    <div>
                        <div className="p-4 flex flex-col">
                            <div className="mb-6 text-cyan-600 text-5xl">
                                <h3>Mis proyectos</h3>
                            </div>
                            <Cards />
                        </div>
                    </div>
                </section>
                <section>
                    <h3></h3>

                </section>
            </body>



        </>
    )

}

export default Home;