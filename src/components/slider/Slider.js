import './slider.css';

import arrow from './../../img/arrow.png';

import dockerSkill from './../../img/skills/docker.png';
import javaSkill from './../../img/skills/java.png';
import springSkill from './../../img/skills/spring.png';
import gitSkill from './../../img/skills/git.png';
import nodeSkill from './../../img/skills/node.png';
import postgresSkill from './../../img/skills/postgres.svg';

import { useState } from 'react';

const Slider = () => {
  const slides = [
    javaSkill,
    springSkill,
    dockerSkill,
    gitSkill,
    nodeSkill,
    postgresSkill,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="slider">
      <img
        className="slider-rotate-arrow"
        src={arrow}
        alt="<"
        onClick={previousSlide}
      />
      <img className="slide-image" src={slides[currentIndex]} />
      <img src={arrow} alt=">" onClick={nextSlide} />
    </div>
  );
};

export default Slider;
