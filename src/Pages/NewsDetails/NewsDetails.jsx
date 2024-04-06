import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom"

const NewsDetails = () => {

    const { id } = useParams();
    const [newsAll, setNewsAll] = useState({});
    const { image_url, title, details } = newsAll;

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNewsAll(data.find(news => news._id === id)))
    }, [id])
    
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div>
                <div className="grid grid-cols-3">
                    <div className="border p-3 rounded my-5 col-span-2">
                        <div>
                            <img src={image_url} />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold py-5">{title}</h1>
                        </div>

                        <div>
                            <p className="py-5">
                                {details}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <RightSideNav></RightSideNav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;