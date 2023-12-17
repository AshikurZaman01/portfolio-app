import imgg from "../../assets/images/Firefly 20231211224753.png";
import { FaRegFileAlt, FaRegIdBadge } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import handleDownload from './downloadCV.js';

const About = () => {
    return (
        <div>
            <div className="text-center mb-10 pb-10">
                <h1 className="text-3xl md:text-4xl font-bold my-5">About Me</h1>
                <h4 className="text-sm md:text-xl font-semibold text-gray-500">My Introduction</h4>
            </div>

            <div>
                <div className="flex md:flex-row flex-col justify-between items-center">

                    <div className="flex-1 md:order-1 order-1 md:my-0 mb-10">
                        <div className="flex justify-center">
                            <img className="md:w-[250px] w-[200px] h-[200px] md:h-[400px] object-cover md:rounded-full rounded-md" src={imgg} alt="" />
                        </div>
                    </div>

                    <div className="flex-1 order-2 md:order-2 ">
                        <div className="flex items-center justify-center md:justify-start gap-5 md:gap-20 text-xl md:text-2xl ">
                            <div className="flex flex-col justify-center items-center p-4 rounded space-y-3 border border-slate-400 shadow shadow-slate-500">
                                <span className=""><FaRegIdBadge /></span>
                                <h2>Experience</h2>
                                <p className="text-base">1+ Years</p>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3 p-4 rounded  border border-slate-400 shadow shadow-slate-500">
                                <span><IoBagOutline /></span>
                                <h2>Completed</h2>
                                <p className="text-base">40+ Projects</p>
                            </div>
                            <div className="flex flex-col justify-center items-center space-y-3 p-4 rounded  border border-slate-400 shadow shadow-slate-500">
                                <span><BiSupport /></span>
                                <h2>Support</h2>
                                <p className="text-base">Online 24/7</p>
                            </div>
                        </div>

                        <div className="my-10">
                            <p className="text-justify p-6 md:p-0">As a front-end developer, I am a creative and detail-oriented professional dedicated to crafting seamless and engaging user experiences on the web. With a keen eye for design and a passion for translating concepts into interactive and visually appealing interfaces, I thrive on the dynamic intersection of technology and aesthetics.</p>

                            <button onClick={() => handleDownload("patnName", "fileName.pdf")} className="flex items-center justify-center gap-1 btn hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-white btn btn-md text-center mx-auto bg-black text-gray-400 my-10">Download cv <span><FaRegFileAlt /></span></button>
                        </div>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default About;