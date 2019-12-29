import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const { navigation } = props;
    const catID = navigation.getParam('categoryID');
    const MEALS = useSelector(state => state.meals.filtered);

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