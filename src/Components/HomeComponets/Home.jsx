import About from "../About/About";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Testimonials from "../Testimonials/Testimonials";
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;