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
                    <Slider/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
 
export default Skills;