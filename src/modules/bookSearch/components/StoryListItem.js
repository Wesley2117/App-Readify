import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Tag = ({ label }) => (
    <View style={styles.tagContainer}> 
        <Text style={styles.tagText}> {label} </Text>
    </View>
);

export default function StoryListItem({ item }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image 
            source={{ uri: item.coverImage }}
            style={styles.coverImage}
            />

            <View style={styles.infoContainer}> 
                <Text style={styles.titleText}> {item.rank}. {item.title}</Text>
                <Text style={styles.authorText}> Por  {item.author}</Text>

                <View style={styles.statsContainer}>
                    <Text style={styles.statsText}> {item.views}</Text>
                    <Text style={styles.statsText}> {item.parts}</Text>
                </View>

                <View style={styles.tagsWrapper}>
                    {item.tags.map((tag, index) => <Tag key={index} label={tag} />)}
                    <Text style={styles.moreTagsText}> +mais</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15, 
        marginBottom: 20, 
    }, 

    coverImage: {
        width: 80,
        height: 120, 
        borderRadius: 5,
    }, 

    infoContainer: {
        flex: 1, 
        marginLeft: 15,
    }, 

    titleText: {
        color: '#ffffff', 
        fontSize: 16, 
        fontWeight: 'bold', 
    }, 

    authorText: {
        color: '#a9a9a9',
        fontSize: 13,
        marginTop: 2,
    }, 

    statsContainer: {
        flexDirection: 'row', 
        marginTop: 8, 
        alignItems: 'center',
    }, 

    statsText: {
        color: '#a9a9a9', 
        fontSize: 12, 
        marginRight: 15,
    }, 

    tagsWrapper: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        marginTop: 8, 
        alignItems: 'center',
    }, 

    tagContainer: {
        backgroundColor: '#3333333',
        borderRadius: 15, 
        paddingVertical: 4, 
        paddingHorizontal: 10, 
        marginRight: 6, 
        marginBottom: 6,
    }, 

    tagText: {
        color: '#fff', 
        fontSize: 11, 
    }, 

    moreTagsText: {
        color: '#a9a9a9', 
        fontSize: 11,
    }
});