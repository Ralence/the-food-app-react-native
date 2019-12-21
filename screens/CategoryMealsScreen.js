import React from 'react';
import MealList from '../components/MealList';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const { navigation } = props;
    const catID = navigation.getParam('categoryID');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catID));

    return (
        <MealList displayedMeals={displayedMeals} navigation={navigation} />
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const id = navigationData.navigation.getParam('categoryID');
    const selectedCategory = CATEGORIES.find(cat => cat.id === id);
    return {
        headerTitle: selectedCategory.title,
    }
}

export default CategoryMealsScreen;