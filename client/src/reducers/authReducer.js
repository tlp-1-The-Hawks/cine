import { types } from "../types/types";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.LOGIN:
            const { token, user } = action.payload
            localStorage.setItem('token', token.token);
            localStorage.setItem('cinema', user.cinemaId === null ? false : true);
            localStorage.setItem('admin', user.admin);
            localStorage.setItem('islogged', true);
            return {
                ...action.payload,
                islogged: true,
                admin: user.admin,
                cinema: user.cinemaId !== null
            };

        case types.LOGOUT:
            localStorage.clear()
            return {
                islogged: false,
                islogged: false,
                admin: false,
                cinema: false
            }

        default:
            return state;
    }

};