import './skills.css'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/slider/Slider';

import githubIcon from './../../img/icons/github.png';

const Skills = () => {
    return (
        <div>
            <Header/>
            <main className="skills-content">
                <div className='container'>
                    <h2 className="skills-main-title">My skills</h2>
                    <Slider/>
                    <a className='github-link' href="https://github.com/AnnaAplavina">
                        <img src={githubIcon} alt="GitHub link"/>
                        <p>GitHub</p>
                    </a>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
 
export default Skills;