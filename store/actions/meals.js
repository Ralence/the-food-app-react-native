export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

export const toggleFavorite = (mealID) => ({
    type: TOGGLE_FAVORITE,
    mealID
});

export const setFilters = (filterSettings) => ({
    type: SET_FILTERS,
    filterSettings: filterSettings
});