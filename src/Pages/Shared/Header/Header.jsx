
import headerImg from "../../../assets/logo.png"
import moment from 'moment';
import BreakingNews from "../../Home/BreakingNews/BreakingNews";

const Header = () => {
    return (
        <div className="text-center">
            <img className=" mx-auto mt-6" src={headerImg} alt="" />
            <div className="my-3 font-semibold">
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className="bg-gray-200 py-2 px-3 rounded">
                <BreakingNews></BreakingNews>
            </div>
        </div>
    );
};

export default Header;