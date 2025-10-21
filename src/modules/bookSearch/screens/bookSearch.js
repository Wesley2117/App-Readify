import React from "react";
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SEARCH_RESULTS_DATA } from "../data/mockData";
import StoryListItem from "../components/StoryListItem";


const CATEGORY_TABS = ['Romance', 'Fanfic', 'Ficção adolescente', 'Fantasia', 'Aventura'];


const SearchHeader = () => (
    <View style={styles.headerContainer}>
        <View style={styles.searchBar}>
            <Text style={{fontSize: 20, marginRight: 10}}>🔍</Text>
            <TextInput
                placeholder="Pesquise histórias ou pessoas"
                placeholderTextColor="#888"
                style={styles.searchInput}
            />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
            {CATEGORY_TABS.map((tab, index) => (
                <TouchableOpacity key={index} style={styles.tab}>
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
        

        <View style={styles.listHeader}>
            <Text style={styles.storiesCount}>1,93 K Stories</Text>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterText}>📊 Filtro</Text>
            </TouchableOpacity>
        </View>
    </View>
);


export default function BookSearch() {
    return (
        <View style={styles.container}>
            <FlatList
                data={SEARCH_RESULTS_DATA}
                renderItem={({ item }) => <StoryListItem item={item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={<SearchHeader />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00003D', 
        paddingTop: 40, 
    },

    headerContainer: {
        paddingHorizontal: 15,
        marginBottom: 20,
    },

    searchBar: {
        flexDirection: 'row',
        backgroundColor: '#333',
        borderRadius: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
        height: 45,
    },

    searchInput: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
    },

    tabsContainer: {
        marginTop: 20,
        paddingBottom: 5,
    },

    tab: {
        marginRight: 20,
    },

    tabText: {
        color: '#A9A9A9',
        fontSize: 16,
        fontWeight: '500',
    },

    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 10,
    },

    storiesCount: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    
    filterText: {
        color: '#FFFFFF',
        marginLeft: 5,
    }
});