import './skills.css'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import arrow from './../../img/arrow.png'

import dockerSkill from './../../img/skills/docker.png';
import javaSkill from './../../img/skills/java.png';
import springSkill from './../../img/skills/spring.png';
import gitSkill from './../../img/skills/git.png';
import nodeSkill from './../../img/skills/node.png';
import postgresSkill from './../../img/skills/postgres.svg';
import Slider from '../../components/slider/Slider';

const Skills = () => {
    return (
        <div>
            <Header/>
            <main className="skills-content">
                <div className='container'>
                    <h2 className="skills-main-title">My skills</h2>
                    {/* <div className='skills-slider'>
                        <img className="skills-slider-rotate-arrow" src={arrow} alt="arrow left"/>
                        <div className='skills-slider-imgs'>
                            <div className="skills-slider-slide">
                                <img  src={dockerSkill}/>
                            </div>
                            <div className="skills-slider-slide hide-slide">
                                <img  src={javaSkill}/>
                            </div>
                            <div className="skills-slider-slide hide-slide">
                                <img  src={springSkill}/>
                            </div>
                            <div className="skills-slider-slide hide-slide">
                                <img  src={gitSkill}/>
                            </div>
                            <div className="skills-slider-slide hide-slide">
                                <img  src={nodeSkill}/>
                            </div>
                            <div className="skills-slider-slide hide-slide">
                                <img  src={postgresSkill}/>
                            </div>
                        </div>
                        <img src={arrow} alt="arrow left" onClick={nextSlide}/>
                    </div> */}
                    <Slider/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
 
export default Skills;