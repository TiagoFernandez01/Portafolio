import React from "react";
import Chikara from '../../assets/imgs/Chikara.png'
import Weather from '../../assets/imgs/Weather.png'
import Dogs from '../../assets/imgs/Dogs.png'
import Cotizador from '../../assets/imgs/cotizador.png'


const Cards = () => {

    const cardData = [
        {
            title: 'Chikara Coaching Online',
            description: 'Pagina web creada para ofrecer un servicio de asesoramiento online de entrenamineto y nutricíon.',
            imageSrc: Chikara,
            lenguages: ['HTML', 'JavaScript', 'CSS', 'SASS'],
        },
        {
            title: 'The Clean Plate',
            description: 'E-commerce realizado en grupo, destinado a la venta de alimentos y productos saludables, donde se podra comprar y pagar virtualmente. El usuario se podra loguear y el admin cuenta con una seccion de control de Stcok y usuarios registrados.',
            imageSrc: '/docs/images/blog/image-2.jpg',
            lenguages: ['React', 'MongoDB','Mongoose', 'Redux', 'NodeJs', 'Express', 'JavaScript', 'Stripe','SCRUM'],
        },
        {
            title: 'Weather App',
            description: 'Página web realizada para que el usuario pueda ver en tiempo real el clima de las diferentes capitales del mundo.',
            imageSrc: Weather,
            lenguages: ['React', 'JavaScript', 'CSS'],
        },
        {
            title: 'Dog Search',
            description: 'Un buscador de caninos que cuenta con mas de 180 razas! Ademas de poder ver los detalles de cada uno, el usuario podra crea, agregar y ver su propio perro. ',
            imageSrc: Dogs,
            lenguages: ['React', 'JavaScript', 'CSS','Redux', 'PostgreSql', 'Sequelize','TheDogApi'],
        },
        {
            title: 'Ninj Seguros',
            description: 'Cotizador de Seguros para motos, selecciona tu marca y año de moto, opte por el plan que quiera y cotice al instante! ',
            imageSrc: Cotizador,
            lenguages: ['HTML', 'JavaScript', 'CSS'],
        },
        


    ];

    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-xl px-4">
                {cardData.map((card, index) => (
                    <div key={index} className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <img className="rounded-t-lg" src={card.imageSrc} alt="" />

                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
                            <div className="flex flex-wrap">

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