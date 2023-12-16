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
    const [isMenuOpen, setMenuOpen] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`flex flex-col md:flex-row justify-between items-center border-b py-4`}>
            <div><Link className="text-5xl font-bold" to={'/'}>Ashik</Link></div>

            <button onClick={toggleMenu} className="md:hidden self-start mr-4 mt-4 text-3xl z-50">
                {isMenuOpen ? <RiMenu2Fill /> : <IoCloseCircleOutline />}
            </button>

            <div className={`md:ml-auto ${isMenuOpen ? 'hidden' : 'block'}`}>
                <ul className="flex flex-col md:flex-row items-center gap-6 text-2xl font-semibold">
                    <li><Link className="flex justify-center items-center gap-2" to={'/'}><span><IoHomeOutline /></span>Home</Link></li>

                    <li><Link className="flex justify-center items-center gap-2" to={'/about'}><span><FaRegUser /></span>About</Link></li>

                    <li><Link className="flex justify-center items-center gap-2" to={'/skills'}><span><CiStickyNote /></span>Skills</Link></li>

                    <li><Link className="flex justify-center items-center gap-2" to={'/services'}> <span><MdHomeRepairService /></span>Services</Link></li>

                    <li><Link className="flex justify-center items-center gap-2" to={'/portfolio'}> <span><CiPassport1 /></span> Portfolio</Link></li>

                    <li><Link className="flex justify-center items-center gap-2" to={'/contact'}> <span><MdOutlineContactMail /></span> Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
