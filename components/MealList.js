import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = ({ displayedMeals, navigation }) => {


    const renderMealItem = itemData => {
        return (
            <MealItem item={itemData.item} onSelect={() => navigation.navigate({
                routeName: 'MealDetail',
                params: {
                    item: itemData.item
                }
            })} />
        )
    }


    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    }
});


export default MealList;
