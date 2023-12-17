import About from "../About/About";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Services></Services>
        </div>
    );
};

export default Home;