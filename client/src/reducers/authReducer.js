import { types } from "../types/types";
import { FindOneUser } from "../hooks/datePreloads/FindOneUser";


export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.LOGIN:
            (
            async () => {
                const data = await FindOneUser(action.payload)

                    return {
                        ...action.payload,
                        islogged: true,
                        rolCinema: data.cinemaId === null ? false : true
                    };
                }
            )()
        break
        case types.LOGOUT:
            return {
                islogged: false
            }

        default:
            return state;
    }

};