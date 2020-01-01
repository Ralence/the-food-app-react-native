import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filtered: MEALS,
    favorite: []
}

const mealReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const isFavorite = state.favorite.findIndex(meal => meal.id === action.mealID);
            let favMeals = [...state.favorite];
            if (isFavorite >= 0) {
                favMeals = favMeals.filter(meal => meal.id !== action.mealID);
            } else {
                favMeals = [...favMeals, state.meals.find(meal => meal.id === action.mealID)];
            }
            return {
                ...state,
                favorite: [...favMeals]
            };
        case SET_FILTERS:
            const filters = action.filterSettings;
            const filteredMeals = state.meals.filter(meal => {
                const filterKeys = Object.keys(filters);

                let filtered = true;
                filterKeys.forEach(key => {
                    if (filters[key] === true && meal[key] === false) {
                        filtered = false;
                    }
                });
                return filtered;
            })
            return {
                ...state,
                filtered: [...filteredMeals]
            }
        default:
            return state;
    }
}

export default mealReducer;