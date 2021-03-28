const initialState = {
    areas: []
}

const areaReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case "FIND_ALL_AREAS":
            return {
                ...state,
                areas: action.areas
            }

        default:
            return state
    }
}

export default areaReducer