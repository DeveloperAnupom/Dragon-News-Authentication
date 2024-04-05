import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const Login = () => {

    const { logInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        logInUser(email, password)
            .then(result => {
                const name = result.user.displayName;
                toast.success(`${name, 'LoggedIn Successfully'}`)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                const errorMessage = error.message.split(':')[1].trim();
                toast.error(`${errorMessage}`);
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className=" md:w-1/2 mx-auto my-10 bg-base-200 py-10 px-5 rounded-xl">
                <h1 className="text-2xl font-semibold text-center">Login Your Account</h1>
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Email Address</span>
                        </label>
                        <input type="email" placeholder="Enter Your Email Address" className="input input-bordered bg-slate-100" name="email" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-lg font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" className="input input-bordered bg-slate-100" name="password" required />
                        <label className="label">
                            <a href="#" className="font-semibold text-red-600 text-sm link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn bg-gray-600 text-white text-lg">Login</button>
                    </div>
                </form>

                <div className="mt-4">
                    <p className="font-semibold text-center">Dont have an account ?
                        <Link to="/register" className="text-red-600"> Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;