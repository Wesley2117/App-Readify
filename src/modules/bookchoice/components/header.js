import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>
            <View>
                <Image
                style={styles.iconLogo}
                source={require('../assets/logosemFuno.png')}
                />
            </View>

            <View>
                <TouchableOpacity 
                style={styles.help}
                >
                    <Text style={styles.texthelp}>Help me, please</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Image 
                style={styles.perfil}
                    source={require('../assets/profile.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        backgroundColor: '#00003D',
        paddingTop: 20, 
        justifyContent: 'space-between',
        paddingHorizontal: 30
    }, 

    iconLogo: {
        height: 40,
        width: 40, 
    },

    help: {
        width: 200, 
        height: 40,
        borderRadius: 20, 
        backgroundColor: '#aaa',
        justifyContent: 'center', 
        alignItems: 'center'
    },

    texthelp: {
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#fff',
    },

    perfil: {
        height: 40,
        width: 40,
        
    },
})