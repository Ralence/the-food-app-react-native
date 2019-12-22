import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import DefaultText from '../components/DefaultText';

const MealItem = ({ item, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect}>
            <View style={styles.mealItem}>
                <View style={{ ...styles.mealHeader, ...styles.row }}>
                    <ImageBackground source={{ uri: item.imageUrl }} style={styles.image}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                        </View>

                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealDetails, ...styles.row }}>
                    <DefaultText>{item.duration}m</DefaultText>
                    <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        height: 200,
        margin: 5,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    row: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetails: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    title: {
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
    }
});


export default MealItem