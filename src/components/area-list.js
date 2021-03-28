import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import areaService, { findAllAreas } from "../services/area-service";

const AreaList = (
    {
        areas=[],
        findAllAreas
    }) => {

    useEffect(() => {
        findAllAreas()
    }, [])
    
    return(
        <>
        <ul className="list-group">
        {
            areas &&
            <h1>AREAS</h1>
        }
        {
            !areas &&
            <h1>NO AREAS :/</h1>
        }
        </ul>
        </>
    )
}

const stpm = ( state ) => ({
    areas: state.areaReducer.areas
})

const dtpm = ( dispatch ) => ({
    findAllAreas: () => {
        areaService.findAllAreas()
            .then(areas => dispatch({
                type: "FIND_ALL_AREAS",
                areas
            }))
    }
})

export default connect ( stpm , dtpm ) ( AreaList );