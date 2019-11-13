import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    const { navigation } = props;
    return (
        <View style={styles.screen}>
            <Text>Category Meals Screen</Text>
            <Button title='go to meal detail' onPress={() => navigation.navigate({ routeName: 'MealDetail' })} />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;