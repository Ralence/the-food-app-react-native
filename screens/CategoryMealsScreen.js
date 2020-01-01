import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const { navigation } = props;
    const catID = navigation.getParam('categoryID');
    const MEALS = useSelector(state => state.meals.filtered);

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catID));

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText style={{ fontSize: 20, textAlign: 'center' }}>No meals that match your current filters were found!</DefaultText>
                <DefaultText style={{ fontSize: 20, textAlign: 'center' }}>Check your filters!</DefaultText>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,

    }
})

export default CategoryMealsScreen;