import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const NewsCard = ({ sNews }) => {
    const { rating, total_view, title, author, image_url, details, _id } = sNews;
    return (
        <div className="border p-3 rounded my-5">
            <div className="flex items-center gap-3 bg-slate-100 p-3">
                <div>
                    <img src={author.img} className="w-11 rounded-full" />
                </div>
                <div>
                    <h3>{author.name}</h3>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div>
                <h1 className="text-lg font-semibold py-5">{title}</h1>
            </div>
            <div>
                <img src={image_url} />
            </div>
            <div className="py-5">

                {
                    details.length > 200 ? <p> {details.slice(0, 250)} <Link to={`/news/${_id}`} className="font-bold text-blue-700">Read More...</Link></p> : details
                }

            </div>
            <div className="flex items-center justify-between px-5 gap-2">
                <div><p className="flex items-center justify-center gap-2">
                    <FaStar /><FaStar /><FaStar /><FaStar />{rating.number}</p>
                </div>
                <div><p className="flex items-center justify-center gap-2">
                    <FaEye />{total_view}</p>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    sNews: PropTypes.object.isRequired
}

export default NewsCard;