import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
    const favoriteMeals = MEALS.filter(item => item.id === 'm1' || item.id === 'm2')

    return <MealList displayedMeals={favoriteMeals} navigation={navigation} />
};

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Favorites',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}  >
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => navData.navigation.toggleDrawer()}
            />
        </HeaderButtons>
    }
}


export default FavoritesScreen;