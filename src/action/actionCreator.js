import { 
    GET_DATA,
    SET_DATA,
    TOGGLE_CLICK,
} from './actionType';

export const getData = () => {
    return  {
        type: GET_DATA
    }
}

export const setData = (data) => {
    return {
        type: SET_DATA, 
        data: data
    }
}

export const toggleClick = (data) => {
    return {
        type: TOGGLE_CLICK,
        clicked: data
    }
}

