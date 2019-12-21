import React from 'react';

import MealList from '../components/MealList';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
    const favoriteMeals = MEALS.filter(item => item.id === 'm1' || item.id === 'm2')

    return <MealList displayedMeals={favoriteMeals} navigation={navigation} />
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Favorites'
}


export default FavoritesScreen;