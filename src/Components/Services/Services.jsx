import { CgWebsite } from "react-icons/cg";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { FcCollaboration } from "react-icons/fc";
import { MdDashboardCustomize, MdDeveloperBoard } from "react-icons/md";

const Services = () => {
    return (
        <div className="my-[100px]">
            <div className="my-10 text-center space-y-4">
                <h1 className="text-2xl md:text-4xl font-bold">My Services</h1>
                <h4 className="text-sm text-gray-500 md:text-2xl font-semibold">What i offer</h4>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 text-center py-10">

                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn w-[400px]">
                            <span className="text-3xl"><CgWebsite /></span>
                            <h1>Responsive Web Design</h1>
                        </summary>
                        <ul className=" p-5 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[500px]">
                            <li className="text-justify">Create visually appealing and user-friendly websites that seamlessly adapt to various devices and screen sizes. Utilizing HTML, CSS, and Tailwind CSS, I ensure an optimal viewing experience for your audience.</li>

                        </ul>
                    </details>
                </div>

                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn w-[400px]">
                            <span className="text-3xl"><MdDeveloperBoard /></span>
                            <h1>UI/UX Development</h1>
                        </summary>
                        <ul className=" p-5 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[500px]">
                            <li className="text-justify">Craft intuitive and engaging user interfaces with a focus on user experience. Using the latest design principles and frameworks like Tailwind CSS and Daisy UI, I bring your ideas to life, enhancing usability and overall satisfaction.</li>

                        </ul>
                    </details>
                </div>

                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn w-[400px]">
                            <span className="text-3xl"><MdDashboardCustomize /></span>
                            <h1>Custom Web Development</h1>
                        </summary>
                        <ul className=" p-5 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[500px]">
                            <li className="text-justify">Build bespoke web applications tailored to your specific needs. Leveraging the power of Node.js and Express.js, I develop scalable and efficient solutions that meet both functional requirements and performance standards.</li>

                        </ul>
                    </details>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn w-[400px]">
                            <span className="text-3xl"><FcCollaboration /></span>
                            <h1>Collaborative Development</h1>
                        </summary>
                        <ul className=" p-5 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[500px]">
                            <li className="text-justify">Work collaboratively to bring your vision to reality. Utilizing version control systems and agile development methodologies, I ensure a smooth and transparent development process. Regular updates and feedback sessions keep you informed and involved throughout the project.</li>

                        </ul>
                    </details>
                </div>

                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn w-[400px]">
                            <span className="text-3xl"><FaDatabase /></span>
                            <h1>Database Integration</h1>
                        </summary>
                        <ul className=" p-5 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[500px]">
                            <li className="text-justify">Integrate MongoDB seamlessly into your web applications to store and manage data efficiently. From schema design to query optimization, I ensure robust database solutions that support your application's needs.</li>

                        </ul>
                    </details>
                </div>
                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn w-[400px]">
                            <span className="text-3xl"><BsFillTicketPerforatedFill /></span>
                            <h1>Performance Optimization</h1>
                        </summary>
                        <ul className=" p-5 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[500px]">
                            <li className="text-justify">Enhance the speed and performance of your websites and applications. Through optimization techniques and performance testing, I ensure that your digital presence is not only visually appealing but also functions at its best.</li>

                        </ul>
                    </details>
                </div>



            </div>

        </div>
    );
};

export default Services;