/* eslint-disable no-unused-vars */

import { 
    GET_DATA,
    SET_DATA,
    TOGGLE_CLICK,
} from '../action/actionType';

export const homeReducer = (state = {}, action)=>{
    switch (action.type) {
        case GET_DATA:
          return state.data;
        case SET_DATA:
            return {
              ...state,
              data:action.data
            }
        case TOGGLE_CLICK:
            return {
                ...state,
                clicked:action.clicked
            }
        default:
          return state
    }
}

export default homeReducer;