import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/colors';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen
    },
    MealDetail: {
        screen: MealDetailScreen
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor
    }
})

const TabScreensConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInformation) => {
                return <Ionicons name='ios-restaurant' size={24} color={tabInformation.tintColor} />
            },
            tabBarColor: Colors.primaryColor,
            activeColor: 'white'
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInformation) => {
                return <Ionicons name='ios-star' size={24} color={tabInformation.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            activeColor: 'white'
        }
    }

}

const MealsTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(
            TabScreensConfig,
            {
                activeColor: Colors.accentColor,
                shifting: true
            })
        : createBottomTabNavigator(
            TabScreensConfig,
            {
                tabBarOptions: {
                    activeTintColor: Colors.accentColor
                }
            });

export default createAppContainer(MealsTabNavigator);
