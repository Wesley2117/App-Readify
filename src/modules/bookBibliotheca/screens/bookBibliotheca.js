import { TabActions } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import BookItem from '../components/BookItem';
import EmptyLibrary from '../components/EmptyLibrary';
import TabSelector from '../components/TabSelector';

const CURRENT_BOOKS = [
    {
        id: '1',
        title: 'A Chama no Inverno',
        author: 'CronistaUrbano',
        coverUrl: 'https://picsum.photos/seed/book1/300/450',
    },
    {
        id: '2',
        title: 'Ecos da Meia-Noite',
        author: 'EscritoraNoturna',
        coverUrl: 'https://picsum.photos/seed/book2/300/450',
    },
    {
        id: '3',
        title: 'O Último Guardião',
        author: 'MestreDasLendas',
        coverUrl: 'https://picsum.photos/seed/book3/300/450',
    },
    {
        id: '4',
        title: 'Cidade de Néon',
        author: 'CyberPoeta',
        coverUrl: 'https://picsum.photos/seed/book4/300/450',
    },
];

const ARCHIVED_BOOKS = [
    {
        id: '5',
        title: 'Crônicas do Sol Esquecido',
        author: 'Historiador Antigo',
        coverUrl: 'https://picsum.photos/seed/book5/300/450',
    },
];

const LibraryScreen = () => {
    const [selectedTab, setSelectedTab] = useState('atuais');

    const getBook = () => {
        switch (selectedTab) {
            case 'atuais':
                return CURRENT_BOOKS;

            case 'arquivos':
                return ARCHIVED_BOOKS;

            case 'listas':
                return [];

            default:
                return [];
        }
    };

    const booksToShow = getBook();

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <TabSelector
                    selectedTab={selectedTab}
                    onSelectTab={setSelectedTab}
                />
                <FlatList
                    data={booksToShow}
                    renderItem={({ item }) => <BookItem book={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={3} // 3 colunas para os livros
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    // Aqui está o truque: se a lista estiver vazia, mostramos seu componente!
                    ListEmptyComponent={EmptyLibrary}
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#00003D'
    },

    container: {
        flex: 1
    },

    list: {
        flex: 1,
    },

    listContext: {
        paddingHorizontal: 8,
        paddingTop: 16,
    },
});

export default LibraryScreen;