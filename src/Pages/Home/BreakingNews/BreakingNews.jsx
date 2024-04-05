import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="bg-[#D72050] text-white px-4 py-2 rounded">Latest </button>
            <Marquee pauseOnHover={true}>
                <Link className="mr-3 font-semibold" to="/">Test series Sri Lanka sweep Bangladesh Test series with crushing win |</Link>
                <Link className="mr-3 font-semibold" to="/">How the Premier League title race stands with nine games to go |</Link>
                <Link className="mr-3 font-semibold" to="/">Virat Kohli vows to make India world-beaters after regaining T20 captaincy |</Link>
                <Link className="mr-3 font-semibold" to="/">Sharfuddoula in ICC elite panel of umpires as first Bangladeshi |</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;