import React from "react";
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';

import Header from "../components/header";
import GenreList from "../components/genreList";
import { GENRES_DATA } from "../data/mockData";



export default function bookChoice(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header/>

            <FlatList 
            data={GENRES_DATA}
            renderItem={({ item }) => (
                <GenreList category={item.category} books={item.books} />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 20 }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#00003D'
    },

    viewTerror: {
        padding: 20
    },

    textTerror: {
        color: '#aaa',
    },
})