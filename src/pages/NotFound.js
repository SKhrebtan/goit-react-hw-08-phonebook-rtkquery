import { NavLink, useLocation } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import {  useRef } from "react";
import { clearError } from "redux/auth/slice";
import { getError } from "redux/auth/selectors";

export const NotFound = () => {
    const error = useSelector(getError);
    const dispatch = useDispatch();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
     
    return (
        <div>
            {error === 'Request failed with status code 400' && <h1>Incorrect data inputed</h1>}
            {error === 'Network Error' && <h1>Sorry, Server fallen</h1>}
            <NavLink to={backLinkLocationRef.current} onClick={() => dispatch(clearError())}>Try Again</NavLink>
        </div>
    )
}
