import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const forgotPassReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.FSPASS:
            return action.payload;
        case GLOBALTYPES.FVPASS:
            return action.payload;
        default:
            return state;
    }
}


export default forgotPassReducer