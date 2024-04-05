import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(result => result.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className="px-3 py-4">
                <h1 className="text-lg font-semibold mb-5">All Categories</h1>
                <div className="space-y-5 text-center">
                    {
                        categories.map((category) =>
                            <NavLink
                                className='block text-lg font-semibold text-gray-600'
                                to={`/categories/${category.id}`}
                                key={category.id}>
                                {category.name}
                            </NavLink>)
                    }
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;