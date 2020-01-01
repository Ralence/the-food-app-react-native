import React from 'react';
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';


const FavoritesScreen = ({ navigation }) => {

    const favoriteMeals = useSelector(state => state.meals.favorite);

    if (!favoriteMeals || favoriteMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText style={{ fontSize: 20, textAlign: 'center' }}>No favorite meals found!</DefaultText>
                <DefaultText style={{ fontSize: 20, textAlign: 'center' }}>Start adding some!</DefaultText>
            </View>
        )
    }

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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,

    }
})


export default FavoritesScreen;