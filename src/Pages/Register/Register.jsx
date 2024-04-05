import toast from 'react-hot-toast';
import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

    const { createUser, logOutUser } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        // const name = form.get("name");
        const email = form.get("email");
        const passWord = form.get("password");
        e.currentTarget.reset();

        createUser(email, passWord)
            .then(result => {
                console.log(result.user);
                toast.success('Registration Complete Successfully');
                logOutUser();
            })
            .catch(error => {
                const errorMessage = error.message.split(':')[1].trim();
                toast.error(`${errorMessage}`);
            })
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
                <div className=" md:w-1/2 mx-auto my-10 bg-base-200 py-10 px-5 rounded-xl">
                    <h1 className="text-2xl font-semibold text-center">Register Your Account</h1>
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" className="input input-bordered bg-slate-100" name="name" required />
                        </div>
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
                        </div>
                        <p> <input type="checkbox" name="" id="" /> Accept Our Term And Condition</p>
                        <div className="form-control mt-3">
                            <button className="btn bg-gray-600 text-white text-lg">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;