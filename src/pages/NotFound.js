import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  useRef,useEffect } from "react";
import { clearError } from "redux/auth/slice";

export const NotFound = () => {
    const dispatch = useDispatch();
    const { state, state: {error} } = useLocation();
    const backLinkLocationRef = useRef(state?.from ?? '/login');
    
    useEffect(() => {
          dispatch(clearError())
    }, [dispatch])

    return (
        <div>
            {error === 'Request failed with status code 400' && <h1>Incorrect data inputed</h1>}
            {error === 'Network Error' && <h1>Sorry, Server fallen</h1>}
            <NavLink to={backLinkLocationRef.current}>Try Again</NavLink>
        </div>
    )
}
