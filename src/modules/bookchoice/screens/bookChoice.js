import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Header from "../components/header";

export default function bookChoice(){
    return(
        <View style={styles.container}>
            <Header/>
            <FlatList 
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#000'
    },

    viewTerror: {
        padding: 20
    },

    textTerror: {
        color: '#aaa',
    },
})