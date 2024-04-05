import React from "react";
import reactLogo from '../assets/imgs/react-logo.png'
import cssLogo from '../assets/imgs/css-logo.png'
import expressLogo from '../assets/imgs/express-logo.png'
import gitLogo from '../assets/imgs/git-logo.png'
import htmlLogo from '../assets/imgs/html-logo.png'
import jsLogo from '../assets/imgs/js-logo.png'
import meetLogo from '../assets/imgs/meet-logo.png'
import mongodbLogo from '../assets/imgs/mongodb-logo.png'
import mongooseLogo from '../assets/imgs/mongoose-logo.png'
import nodeLogo from '../assets/imgs/node-logo.png'
import npmLogo from '../assets/imgs/npm-logo.png'
import reduxLogo from '../assets/imgs/redux-logo.png'
import sassLogo from '../assets/imgs/sass-logo.png'
import sequelizeLogo from '../assets/imgs/sequelize-logo.png'
import slackLogo from '../assets/imgs/slack-logo.png'
import tailwindLogo from '../assets/imgs/tailwind-logo.png'
import postgresqlLogo from '../assets/imgs/postgresql-logo.png'
import vscLogo from '../assets/imgs/vs-logo.png'
import insomniaLogo from '../assets/imgs/insomnia-logo.png'
import githubLogo from '../assets/imgs/github.png'
import zoomLogo from '../assets/imgs/zoom-logo.png'

function SkillItem({ src, text }) {
    return (
      <div className="flex flex-col items-center flex-wrap">
        <img className="w-12" src={src} alt="" />
        <p className="font-font1">{text}</p>
      </div>
    );
  }
  
  const sections = [
    {
      title: 'Front-End',
      skills: [
        { src: reactLogo, text: 'React' },
        { src: jsLogo, text: 'JavaScript' },
        { src: reduxLogo, text: 'Redux' },
        { src: htmlLogo, text: 'HTML5' },
        { src: cssLogo, text: 'CSS3' },
        { src: sassLogo, text: 'SASS' },
        { src: tailwindLogo, text: 'Tailwind CSS' },
      ],
    },
    {
      title: 'Back-End',
      skills: [
        { src: postgresqlLogo, text: 'PostgreSQL' },
        { src: sequelizeLogo, text: 'Sequelize' },
        { src: mongodbLogo, text: 'MongoDB' },
        { src: mongooseLogo, text: 'Mongoose' },
      ],
    },
    {
      title: 'Herramientas',
      skills: [
        { src: vscLogo, text: 'Visual Studio Code' },
        { src: npmLogo, text: 'npm' },
        { src: insomniaLogo, text: 'Insomnia' },
        { src: gitLogo, text: 'Git' },
        { src: githubLogo, text: 'GitHub' },
      ],
    },
    {
      title: 'Comunicación',
      skills: [
        { src: slackLogo, text: 'Slack' },
        { src: meetLogo, text: 'Google Meet' },
        { src: zoomLogo, text: 'Zoom' },
      ],
    },
  ];
  
  const abilities = () => {
    return (
      <>
        <div className="flex flex-col items-center mt-10">
          <h3 className="font-bold text-cyan-600 text-5xl font-font2 py-2">Mis Habilidades</h3>
          {sections.map((section, index) => (
            <div className="flex flex-col items-center" key={index}>
              <h4 className="text-4xl font-bold text-white font-font2">{section.title}</h4>
              <div className="flex flex-wrap justify-center items-center text-white gap-4 my-8">
                {section.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex} src={skill.src} text={skill.text} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
  
  export default abilities;