import React, { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import GenreItem from "../components/genreItem";

const genres = [
    "Romance", "Fiction", "Fantasy", "Horror", "Suspense",
    "Adventure", "Mystery", "Drama", "History", "Science",
    "Biography", "Self-Help", "Religion", "Technology", "Politics",
    "Sports", "Humor", "Comics", "Classics", "Psychology",
    "Philosophy", "Poetry", "Children's", "Educational"
];

export default  function FinalCreateAccount({ navigation}){
    const [selectedGenres, setSelectedGenres] = useState([]);

    const toggleGenre = (genre) => {
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter((g) => g !== genre));
        } else {
            if (selectedGenres.length <3) {
                setSelectedGenres([...selectedGenres, genre]);
            }
        }
    };

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>What are you thee favorite genres?</Text>
                <Text style={styles.subTitle}>Choose at least one genre to receive personalized recommendations.</Text>
            </View>

            <View style={{paddingTop: 30}}>
                <FlatList 
                data={genres}
                numColumns={3}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <GenreItem 
                    item={item}
                    selected={selectedGenres.includes(item)}
                    onPress={() => toggleGenre(item)}
                    />
                )}
                contentContainerStyle={styles.list}
                />
            </View>

            <View style={{paddingTop: 30}}>
                <TouchableOpacity
                style={[
                    styles.button, 
                    selectedGenres.length === 0 && {backgroundColor: "#ccc"}
                ]}
                disabled={selectedGenres.length === 0}
                onPress={() => 
                    {
                    console.log("Selecionado: ", selectedGenres);
                    navigation.navigate('Tabs')
                }}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const  styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30, 
        paddingTop: 70,
        backgroundColor: '#040a24',
        flex: 1
    },

    title: {
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 5,
        color: '#fff'
    }, 

    subTitle: {
        fontSize: 18, 
        color: '#aaa', 
        marginBottom: 15, 
    }, 

    list: {
        justifyContent: 'center',
    }, 

    button: {
        backgroundColor: "#3C91E6", 
        padding: 15, 
        borderRadius: 20, 
        alignItems: 'center', 
        marginTop: 20,
    }, 

    buttonText: {
        color: '#fff', 
        fontSize: 19, 
        fontWeight: 'bold',
    }
})