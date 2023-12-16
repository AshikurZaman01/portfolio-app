import { FaFacebookSquare, FaGithub, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./hero.css";
import img from "../../../assets/images/01.png";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row  justify-between items-center h-[90vh] gap-10 p-4">

            <div className="md:w-[70%] order-2 md:order-1 text-center md:text-left ">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div className="space-y-8 md:w-[85%] order-2">
                        <h1 className="text-3xl md:text-4xl font-semibold">Md. Ashikur Zaman</h1>
                        <h2 className="text-2xl md:text-3xl font-medium">I'am Font-End Web Developer</h2>
                        <h4 className="text-xl md:text-2xl font-semibold">🚀 My Journey</h4>
                        <p className="text-sm md:text-xl text-justify font-normal">My journey into the world of web development began [1 years ago], and since then, I've been on an exciting quest to stay at the forefront of technology. Constantly learning and adapting to the ever-evolving landscape of frontend development is what keeps me motivated.</p>
                    </div>

                    <div className="md:w-[15%] text-3xl flex flex-row  md:flex-col items-center gap-5 py-5 order-1">
                        <span className="hover:shadow-black hover:shadow-md hover:rounded-full"><Link to={'/'}><FaGithub /></Link></span>
                        <span className="hover:shadow-black hover:shadow-md hover:rounded-full"><Link to={'/'}><FaLinkedin /></Link></span>
                        <span className="hover:shadow-black hover:shadow-md hover:rounded-full"><Link to={'/'}><FaInstagramSquare /></Link></span>
                        <span className="hover:shadow-black hover:shadow-md hover:rounded-full"><Link to={'/'}><FaFacebookSquare /></Link></span>
                    </div>
                </div>
            </div>

            <div className="w-[30%] order-1 md:order-2">
                <img className="w-[150px] h-[150px] rounded-full mt-2 md:w-[300px] md:h-[300px]" src={img} alt="" />
            </div>

        </div>
    );
};

export default Hero;