import React from "react";
import Chikara from '../assets/imgs/Chikara.webp'
import Weather from '../assets/imgs/Weather.webp'
import Dogs from '../assets/imgs/dogs.webp'
import Design from '../assets/imgs/design.webp'
import Academia from '../assets/imgs/academia.webp'
//import Cotizador from '../assets/imgs/cotizador.png'
import Plate from '../assets/imgs/plate.webp'


const Cards = () => {

    const cardData = [
        {
            title: 'Chikara Coaching Online',
            description: 'Página web creada para ofrecer un servicio de asesoramiento online de entrenamineto y nutrición.',
            imageSrc: Chikara,
            lenguages: ['HTML', 'JavaScript', 'CSS', 'SASS'],
            link:'https://tiagofernandez01.github.io/Proyecto-Tiago-Fernandez/'
        },
        {
            title: 'The Clean Plate',
            description: 'E-commerce realizado en grupo, destinado a la venta de alimentos y productos saludables, donde se podra comprar y pagar virtualmente. El usuario se podra loguear y el admin cuenta con un Dashboard de control de Stcok y usuarios registrados.',
            imageSrc: Plate,
            lenguages: ['React', 'MongoDB','Mongoose', 'Redux','redux-toolkit','TailwindCSS', 'NodeJs', 'Express', 'JavaScript', 'Stripe','SCRUM'],
            link:'https://github.com/jeanvela/The-Clean-Plate'
        },
        {
            title: 'Weather App',
            description: 'Página web realizada para que el usuario pueda ver en tiempo real el clima de las diferentes capitales del mundo.',
            imageSrc: Weather,
            lenguages: ['React', 'JavaScript', 'CSS'],
            link:'https://github.com/TiagoFernandez01/Weather-App'
        },
        {
            title: 'Dog Search',
            description: 'Un buscador de caninos que cuenta con mas de 180 razas! Ademas de poder ver los detalles de cada uno, el usuario podra crea, agregar y ver su propio perro. ',
            imageSrc: Dogs,
            lenguages: ['React', 'JavaScript', 'CSS','Redux', 'PostgreSql', 'Sequelize','TheDogApi'],
            link:'https://github.com/TiagoFernandez01/Dogs-Web'
        },
        {
            title: 'Bassiskisstvo',
            description: 'Sitio web para una marca de diseño grafico en la cual se ofrecen sus servicios, se aexponenen sus trabajos en una galeria y contacto mediante e-mail, WhatsApp y redes sociales.',
            imageSrc: Design,
            lenguages: ['React', 'JavaScript', 'TailwindCss', 'MongoDB', 'Mongoose','Cludinary'],
            link:'http://bassiskisstvo.com.ar/'
        },
        {
            title: 'Academia de Boxeo',
            description: ' Aún solo en formato móvil. En construcción... ',
            imageSrc: Academia,
            lenguages: ['React', 'JavaScript', 'TailwindCss','Flowbite','En proceso...'],
            link:'https://academia-de-boxeo.vercel.app/'
        },
    ];

    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-xl px-4">
                {cardData.map((card, index) => (
                    <div key={index} className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                       <img className="rounded-t-lg" src={card.imageSrc}/>

                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                            <a href={card.link} target="_blank" className="hover:underline"> {card.link}</a>
                            <div className="flex flex-wrap my-4">

                                {card.lenguages.map((language, languageIndex) => (
                                    <span key={languageIndex} className="mr-2 mb-2 px-2 py-1 text-sm font-medium text-white bg-blue-700 hover:bg-blue-600 rounded-lg">{language}</span>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </>
    )


}

export default Cards