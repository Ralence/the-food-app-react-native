import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = props => {
    const { navigation } = props;

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryID: itemData.item.id
                    }
                })} />
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    )
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item
                title="Menu"
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer() }}
            />
        </HeaderButtons>
    };
};

export default CategoriesScreen;