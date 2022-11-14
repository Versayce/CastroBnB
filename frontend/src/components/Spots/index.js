import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpots } from "../../store/SpotReducer";

const SpotList = () => {
    const dispatch = useDispatch;
    const spots = useSelector(state => state.payload)

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])


    return (
        <div className="spot-container">
            {spots}
        </div>
    )
}

export default SpotList;
