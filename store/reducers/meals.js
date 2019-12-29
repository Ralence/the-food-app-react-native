import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filtered: MEALS,
    favorite: []
}

const mealReducer = (state = initialState, action) => {
    return state;
}

export default mealReducer;