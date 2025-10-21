import React from "react";
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity} from "react-native";

const BookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookContainer}>
        <Image 
        source={{ uri: item.image }}
        style={styles.bookCover}
        />
    </TouchableOpacity>
);

export default function GenreList({ category, books}) {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryTitle}> {category} </Text>

            <FlatList 
            data={books}
            renderItem={({ item }) => <BookItem item={item} />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 24,
    },

    categoryTitle: {
        color: '#fff', 
        fontSize: 20, 
        fontWeight: 'bold', 
        marginLeft: 15, 
        marginBottom: 12
    },

    bookContainer: {
        marginLeft: 15
    }, 

    bookCover: {
        width: 120, 
        height: 180, 
        borderRadius: 8,
    }, 

    listContainer: {
        paddingRight: 15,
    },
});