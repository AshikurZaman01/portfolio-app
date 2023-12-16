import { Outlet } from "react-router-dom";
import Navbar from "../HomeComponets/Navbar/Navbar";

const Roots = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;