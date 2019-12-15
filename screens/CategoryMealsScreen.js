import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/colors';

const CategoryMealsScreen = props => {
    const { navigation } = props;
    const catID = navigation.getParam('categoryID');

    return (
        <View style={styles.screen}>
            <Text>Category Mealssssss Screen</Text>
            <Button title='go to meal detail' onPress={() => navigation.navigate({ routeName: 'MealDetail' })} />
            <Button title='Back' onPress={() => navigation.pop()} />
        </View>
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;