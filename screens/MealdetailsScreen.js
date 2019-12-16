import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailsScreen = props => {
    const meal = props.navigation.getParam('item')
    return (
        <View style={styles.screen}>
            <Text>{meal.title}</Text>
        </View>
    )
};

MealDetailsScreen.navigationOptions = navigationData => {
    const meal = navigationData.navigation.getParam('item');

    return {
        headerTitle: meal.title
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailsScreen;