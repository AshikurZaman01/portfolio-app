import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiStickyNote } from "react-icons/ci";
import { MdHomeRepairService } from "react-icons/md";
import { CiPassport1 } from "react-icons/ci";
import { MdOutlineContactMail } from "react-icons/md";

const Navbar = () => {
    return (
        <div>

            <nav className="flex justify-between items-center border-b py-4">
                <div><Link className="text-5xl font-bold" to={'/'}>Ashik</Link></div>

                <div>
                    <ul className="flex items-center gap-6 text-2xl font-semibold">
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