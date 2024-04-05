import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import RotatingLines from "react-spinners/ClipLoader";
import {useLocation} from "react-router-dom"

const PersonalRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="flex items-center justify-center mt-60">
            <RotatingLines
                visible={true}
                height="100"
                width="100"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PersonalRouter.propTypes = {
    children: PropTypes.node.isRequired
}

export default PersonalRouter;