import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailsScreen = props => {
    const meal = props.navigation.getParam('item');
    const dispatch = useDispatch();
    const favoriteMeals = useSelector(state => state.meals.favorite);
    const isFavorite = favoriteMeals.indexOf(meal) >= 0;



    const toggleFavoriteHandler = useCallback(() => {

        dispatch(toggleFavorite(meal.id))
    }, [dispatch, meal.id]);

    useEffect(() => {
        props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFavorite });
    }, [isFavorite]);

    return (
        <ScrollView>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{meal.duration}m</DefaultText>
                <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {meal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.title}>Steps</Text>
            {meal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>

    )
};

MealDetailsScreen.navigationOptions = navigationData => {
    const meal = navigationData.navigation.getParam('item');
    const toggle = navigationData.navigation.getParam('toggleFavorite')
    const isFavorite = navigationData.navigation.getParam('isFavorite');

    return {
        headerTitle: meal.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName={isFavorite ? 'ios-star' : 'ios-star-outline'} onPress={() => toggle()} />
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailsScreen;