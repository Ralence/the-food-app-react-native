import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';


const FavoritesScreen = ({ navigation }) => {

    const favoriteMeals = useSelector(state => state.meals.favorite);

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