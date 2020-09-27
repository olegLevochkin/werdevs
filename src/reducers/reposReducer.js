const SET_DATE = "SET_DATE"

const defaultState = {

    count: []
}

export default function reposReducer(state = defaultState, action) {

    switch (action.type) {
        case SET_DATE:
            return {
                count: [...state.count, action.payload]
            }
        default:
            return state
    }
}

export const setCount = (count) => ({type: SET_DATE, payload: count})