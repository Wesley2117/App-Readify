import React, { use } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}> 
            <View style={styles.viewWelcome}>
                <Image 
                style={styles.imgWell}
                source={require('../assets/logo1.png')}
                />
            </View>

            <View style={styles.viewText}>
                <Text style={styles.textWell} > Read me bitch end expend your little mind</Text>
            </View>

            <View style={styles.viewButto}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                > 
                    <LinearGradient 
                    colors={['#70C1B3', '#247BA0']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.button}
                    >
                        <Text style={styles.textButton}>Get Start</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20,
        backgroundColor: "#00003D", 
        paddingTop: 160
    },

    viewWelcome:{
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: 180
    }, 

    imgWell: {
        width: 290, 
        height: 60
    }, 

    viewText: {
        paddingTop: 50,
        paddingHorizontal: 50
    },

    textWell: {
        fontSize: 25, 
        fontWeight: 'bold', 
        color: '#fff', 
        marginTop: 30
    }, 

    viewButto: {
        paddingTop: 70, 
        paddingHorizontal: 20
    },

    button: {
        width: '100%',
        height: 50, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    textButton: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#fff', 

    }
})