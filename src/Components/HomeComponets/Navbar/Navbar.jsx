import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";
import { MdHomeRepairService } from "react-icons/md";
import { CiPassport1 } from "react-icons/ci";
import { MdOutlineContactMail } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className={`flex flex-col md:flex-row justify-between items-center border-b py-4 ${isMenuOpen ? 'bg-gray-200' : ''}`}>
                <div><Link className="text-5xl font-bold" to={'/'}>Ashik</Link></div>

                <button onClick={toggleMenu} className="md:hidden self-start mr-4 mt-4 text-3xl z-50">
                    {isMenuOpen ? <IoCloseCircleOutline /> : <RiMenu2Fill />}
                </button>

                <div className={`md:ml-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row items-center gap-6 text-2xl font-semibold">
                        <li><Link className="flex justify-center items-center gap-2" to={'/'}><span><IoHomeOutline /></span>Home</Link></li>

                        <li><Link className="flex justify-center items-center gap-2" to={'/'}><span><FaRegUser /></span>About</Link></li>

                        <li><Link className="flex justify-center items-center gap-2" to={'/'}><span><CiStickyNote /></span>Skills</Link></li>

                        <li><Link className="flex justify-center items-center gap-2" to={'/'}> <span><MdHomeRepairService /></span>Services</Link></li>

                        <li><Link className="flex justify-center items-center gap-2" to={'/'}> <span><CiPassport1 /></span> Portfolio</Link></li>

                        <li><Link className="flex justify-center items-center gap-2" to={'/'}> <span><MdOutlineContactMail /></span> Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
