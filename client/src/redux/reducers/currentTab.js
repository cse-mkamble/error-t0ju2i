import { GLOBALTYPES } from '../actions/globalTypes'

const initialState = {}

const currentTabReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.CURRENTTAB:
            return action.payload;
        default:
            return state;
    }
}


export default currentTabReducer;