import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom"
import NewsCard from "./NewsCard/NewsCard";

const Home = () => {
    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h1 className="text-xl font-semibold py-3 mb-3">Dragon News Home...</h1>
                    {
                        news.slice(0,4).map(sNews => <NewsCard key={sNews._id} sNews={sNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;