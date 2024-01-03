import NavBarStyle from '../Styles/NavBarStyle.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import { useState } from 'react';
import cpp from '../Assets/cpp.png';
import c from '../Assets/c.png';
import css from '../Assets/css.jpg';
import html from '../Assets/html.png';
import javaScript from '../Assets/javaScript.png';
import nodeJs from '../Assets/nodejs.jpg';
import typeScript from '../Assets/typeScript.png';
import reactJs from '../Assets/reactJs.png';
import angular from '../Assets/angular.jpg';

export default function Skills() {
  const [cardData, setCardData] = useState([
    {
      url: cpp,
      label: 'C++',
    },
    {
      url: c,
      label: 'C',
    },
    {
      url: javaScript,
      label: 'JavaScript',
    },
    {
      url: typeScript,
      label: 'TypeScript',
    },
    {
      url: html,
      label: 'HTML',
    },
    {
      url: css,
      label: 'CSS',
    },
    {
      url: nodeJs,
      label: 'NodeJS',
    },
    {
      url: angular,
      label: 'Angular',
    },
    {
      url: reactJs,
      label: 'ReactJS',
    },
  ]);

  return (
    <>
      <div className={NavBarStyle.skillBlock}>
        <div className={NavBarStyle.AboutMeTxt}>
          <FontAwesomeIcon icon={faLaptopCode} /> Skills And Abilities
        </div>
        <div className={NavBarStyle.SkillCard}>
          {cardData.map(item => (
            <Card key={item.id} props={item} />
          ))}
        </div>
      </div>
    </>
  );
}
