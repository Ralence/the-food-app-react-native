import React from 'react';
import { Platform, Text } from 'react-native';
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
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/colors';

const defaultNavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
}

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
},
    defaultNavigationOptions
);

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
            activeColor: 'white',
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarIcon: (tabInformation) => {
                return <Ionicons name='ios-star' size={24} color={tabInformation.tintColor} />
            },
            tabBarColor: Colors.accentColor,
            activeColor: 'white',
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : 'Favorites'
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
                    labelStyle: {
                        fontFamily: 'open-sans-bold'
                    },
                    activeTintColor: Colors.accentColor
                }
            });

const FiltersStackNavigator = createStackNavigator({
    Filters: {
        screen: FiltersScreen
    }
},
    defaultNavigationOptions
);

const MainNavigator = createDrawerNavigator({
    MealsFavorites: {
        screen: MealsTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FiltersStackNavigator
    }
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold',
            fontSize: 22
        }
    }
});

export default createAppContainer(MainNavigator);
