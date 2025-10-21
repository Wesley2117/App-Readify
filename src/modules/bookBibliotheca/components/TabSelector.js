import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TABS = [
    { key: 'atuais', title: 'LEITURAS ATUAIS' },
    { key: 'arquivo', title: 'ARQUIVO' },
    { key: 'listas', title: 'LISTAS DE LEITURA' },
];

const TabSelector = ({ selectedTab, onSelectTab }) => {
    return (
        <View style={styles.container}>
            {TABS.map((tab) => {
                const isSelected = selectedTab === tab.key;
                return (
                    <TouchableOpacity
                        key={tab.key}
                        onPress={() => onSelectTab(tab.key)}
                        style={[styles.tab, isSelected && styles.selectedTab]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                isSelected && styles.selectedTabText,
                            ]}
                        >
                            {tab.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#121212', // Fundo das abas
        borderBottomWidth: 1,
        borderBottomColor: '#333',
        paddingTop: 40
    },
    tab: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 3,
        borderBottomColor: 'transparent', // Borda invisível por padrão
    },
    selectedTab: {
        borderBottomColor: '#ffa500', // Laranja para a aba selecionada
    },
    tabText: {
        color: '#888', // Cor do texto inativo
        fontWeight: 'bold',
        fontSize: 12,
    },
    selectedTabText: {
        color: '#fff', // Cor do texto ativo
    },
});

export default TabSelector;