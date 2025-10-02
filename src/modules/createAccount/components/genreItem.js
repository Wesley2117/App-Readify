import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function GenreItem({ item, onPress, selected}){
    return(
        <View>
            <TouchableOpacity
            style={[styles.item, selected && styles.itemSelected]}
            onPress={onPress}
            >
                <Text style={[styles.text, selected && styles.textSelected]}> {item} </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flex: 1, 
        margin: 5, 
        padding: 15, 
        borderRadius: 20, 
        borderColor: '#3C91E6', 
        alignItems: 'center', 
        borderWidth: 1
    }, 

    itemSelected: {
        backgroundColor: '#3C91E6', 
        borderColor: '#247BA0', 
    }, 

    text: {
        color: '#fff', 
    }, 

    textSelected: {
        color: '#fff', 
        fontWeight: 'bold',
    }
});