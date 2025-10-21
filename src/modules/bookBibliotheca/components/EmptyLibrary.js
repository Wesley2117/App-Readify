import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Pegamos a altura para centralizar o componente
const { height } = Dimensions.get('window');

const EmptyLibrary = () => {
    return (
        <View style={styles.container}>
            <Ionicons name="library-outline" size={80} color="#555" />
            <Text style={styles.message}>
                Não há nenhuma história na sua biblioteca
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ADICIONE HISTÓRIAS AGORA</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // Usamos a altura da tela (menos o cabeçalho/abas) para centralizar
        height: height * 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    message: {
        color: '#888',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        borderColor: '#888',
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default EmptyLibrary;