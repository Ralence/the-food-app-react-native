export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (mealID) => ({
    type: TOGGLE_FAVORITE,
    mealID
})