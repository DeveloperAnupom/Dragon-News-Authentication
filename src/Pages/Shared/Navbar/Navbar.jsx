import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const {user,logOutUser} = useContext(AuthContext);

    const handleLogOut= () => {
        logOutUser()
        .then(toast.success("You Are LoggedOut"))
        .catch(toast.error("Please Try Again Later"))
    }

    const menubar =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/carrier">Carrier</NavLink></li>
            <li><NavLink to="/login">LogIn</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>

        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 font-semibold">
                    {menubar}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="mr-3">
                    {
                        user && user.email
                    }
                    <img className="w-11 rounded-full" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                {
                    user ? <button onClick={handleLogOut} className="px-4 py-2 rounded-lg bg-gray-700 text-white">Logout</button>:
                    <Link to="/login" className="px-4 py-2 rounded-lg bg-gray-700 text-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;