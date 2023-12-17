import { FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiDaisyui, SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";

const Skills = () => {
    return (
        <div>
            <div className="my-10 text-center space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold">Skills</h1>
                <h4 className="text-sm text-gray-500 md:text-2xl font-semibold">My Technical Level</h4>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="shadow shadow-gray-400 px-5 pt-10 pb-5 md:h-[400px] h-[520px]">
                    <div><h1 className="md:text-2xl text-xl font-bold text-center">Fontend Developer</h1></div>

                    <div className="p-10 grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5">
                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><FaHtml5 /></span>HTML</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><FaCss3Alt /></span>CSS</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><SiTailwindcss /></span>Tailwind CSS</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><SiDaisyui /></span>Daisy UI</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><FaReact /></span>React JS</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><RiJavascriptLine /></span>Next JS</h3>
                    </div>
                </div>

                <div className="shadow shadow-gray-400 px-5 pt-10 pb-5 md:h-[400px] md:mt-0 mt-10 rounded">
                    <div><h1 className="md:text-2xl text-xl font-bold text-center">Backend Developer</h1></div>

                    <div className="p-10 grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-5">
                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><FaNode /></span>Node JS</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><SiExpress /></span>Express JS</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><SiMongodb /></span>MongoDB</h3>

                        <h3 className="border border-gray-400 p-2 rounded flex items-center gap-3 md:text-2xl font-bold"><span><SiMysql /></span>MySql</h3>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;