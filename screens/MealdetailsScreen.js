import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

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
        headerTitle: meal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName='ios-star' onPress={() => console.log('Fav')} />
        </HeaderButtons>
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