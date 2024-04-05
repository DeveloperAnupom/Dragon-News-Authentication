import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import QzoneImg from "../../../assets/qZone1.png"
import QzoneImg2 from "../../../assets/qZone2.png"
import QzoneImg3 from "../../../assets/qZone3.png"


const RightSideNav = () => {
    return (
        <div>
            <div className="px-3 py-5">
                <h2 className="text-2xl font-bold mb-3">Login With</h2>
                <button className="border-2 my-2 justify-center text-blue-600 border-blue-400 flex items-center gap-2 py-1 w-full rounded"><FaGoogle /> Login With Google</button>
                <button className="border-2 my-2 justify-center text-gray-800 border-gray-500 flex items-center gap-2 py-1 w-full rounded"><FaGithub /> Login With Github</button>
            </div>
            <div className="px-3 py-5">
                <h2 className="text-2xl font-bold mb-3">Find Us On</h2>
                <div className="border border-gray-600 rounded-lg">
                    <button className="border-b pl-5 border-gray-600 my-2 flex items-center gap-2 py-1 w-full rounded"><FaFacebook />Facebook</button>
                    <button className="border-b pl-5 border-gray-600 my-2 flex items-center gap-2 py-1 w-full rounded"><FaTwitter />Twitter</button>
                    <button className="my-2 pl-5 flex items-center gap-2 py-1 w-full rounded"><FaInstagram />Instagram</button>
                </div>
            </div>
            <div className="px-3 py-5 bg-slate-50 rounded-lg">
                <h2 className="text-2xl pl-2 font-bold mb-3">Q-Zone</h2>
                <div className="space-y-3">
                    <img src={QzoneImg} className="border-2 p-2 rounded-lg"/>
                    <img src={QzoneImg2} className="border-2 p-2 rounded-lg"/>
                    <img src={QzoneImg3} className="border-2 p-2 rounded-lg"/>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;