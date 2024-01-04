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
    { skill: javaSkill, descr: 'Java' },
    { skill: springSkill, descr: 'Spring framework' },
    { skill: dockerSkill, descr: 'Docker' },
    { skill: gitSkill, descr: 'Git' },
    { skill: nodeSkill, descr: 'Node.js' },
    { skill: postgresSkill, descr: 'Postgresql' },
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

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      previousSlide();
    } else if (event.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <div
      className="slider"
      role="region"
      aria-label="Skills Slider"
      tabIndex="0"
      onKeyDown={handleKeyPress}
    >
      <img
        className="slider-rotate-arrow"
        src={arrow}
        alt="Previous slide"
        onClick={previousSlide}
        tabIndex={0}
      />
      <img
        className="slide-image"
        src={slides[currentIndex].skill}
        alt={slides[currentIndex].descr}
      />
      <img src={arrow} alt="Next slide" onClick={nextSlide} tabIndex={0} />
    </div>
  );
};

export default Slider;
