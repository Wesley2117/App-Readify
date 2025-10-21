import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const BookItem = ({ book }) => {
    return (
        <Pressable style={styles.container}>
            <Image source={{ uri: book.coverUrl }} style={styles.cover} />
            <Text style={styles.title} numberOfLines={2}>
                {book.title}
            </Text>
            <Text style={styles.author} numberOfLines={1}>
                {book.author}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, // Permite que o item se ajuste na grade
        margin: 8,
        maxWidth: '30%', // Garante 3 colunas
    },
    cover: {
        width: '100%',
        aspectRatio: 2 / 3, // Proporção de capa de livro
        borderRadius: 8,
        backgroundColor: '#333', // Placeholder enquanto a imagem carrega
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
    },
    author: {
        color: '#aaa',
        fontSize: 12,
        marginTop: 4,
    },
});

export default BookItem;