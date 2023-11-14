import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.LOGIN:

            return {
                ...action.payload,
                islogged: true,
            };

        case types.LOGOUT:
            return {
                islogged: false
            }

        default:
            return state;
    }

};