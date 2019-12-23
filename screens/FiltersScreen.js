import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';

const FilterSwitch = ({ label, value, onToggle }) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{label}</Text>
            <Switch
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={value}
                onValueChange={onToggle}
            />
        </View>
    )
}

const FilterScreen = props => {
    const [isGlutenFree, seIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available filters:</Text>
            <FilterSwitch label='Gluten-free' value={isGlutenFree} onToggle={() => seIsGlutenFree(!isGlutenFree)} />
            <FilterSwitch label='Lactose-free' value={isLactoseFree} onToggle={() => setIsLactoseFree(!isLactoseFree)} />
            <FilterSwitch label='Vegan' value={isVegan} onToggle={() => setIsVegan(!isVegan)} />
            <FilterSwitch label='Vegetarian' value={isVegetarian} onToggle={() => setIsVegetarian(!isVegetarian)} />
        </View>
    )
};

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filters',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Menu'
                iconName='ios-menu'
                onPress={() => navData.navigation.toggleDrawer()}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '80%',
        marginVertical: 15
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});

export default FilterScreen;