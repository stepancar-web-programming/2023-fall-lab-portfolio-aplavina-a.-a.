import "./home.css"

import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

import videoBackground from "./../../videos/bgVideo.mp4";

const Home = () => {
    return (
        <div>
            <Header/>
            <main className="home-content">
                <div className="container">
                    <div className="home-content-video-container">
                        <video src={videoBackground} autoPlay loop muted/>
                        <div className="home-video-text-container">
                            <h3 className="title-3">I am learning backend development with java and spring framework.</h3>
                            <h3 className="title-3">In programming I like the feeling of achievement when I create a project that brings theory to practice.</h3>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
export default Home;