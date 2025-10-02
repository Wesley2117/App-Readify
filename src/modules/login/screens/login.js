import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

import CreateAccount from "../../createAccount/screen/accont";


export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.campoLogin}>
                <Image 
                style={styles.imgLogin}
                source={require('../assets/reeding.png')}
                />
                <Text style={styles.textLogin}>Hello Again!!</Text>
            </View>

            <View style={styles.campoInputs}>
                <View style={styles.InputsContainer}>
                    <Image 
                    source={require('../assets/do-utilizador.png')}
                    style={styles.icons}
                    />

                    <TextInput
                    style={styles.Inputs}
                    placeholder="Username"
                    placeholderTextColor="#C6C5B9"
                    
                    />
                </View>

                <View style={styles.InputsContainer}>
                    <Image 
                    source={require('../assets/trancar.png')}
                    style={styles.icons}
                    />

                    <TextInput
                    style={styles.Inputs}
                    placeholder="Password"
                    placeholderTextColor="#C6C5B9"
                    secureTextEntry={!passwordVisible}
                    /> 

                    <TouchableOpacity 
                    onPress={() => setPasswordVisible (!passwordVisible)}
                    >
                        <Image 
                        source={passwordVisible 
                            ? require('../assets/yesSenha.png')
                            : require('../assets/nouSenha.png')
                        }
                        style={styles.icons}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={{color: '#C6C5B9', textAlign: 'right', marginTop: 5 }}>  Forgot Password?  </Text>
                </TouchableOpacity>

                <View style={styles.areaLogin}> 
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Tabs')}
                    >
                        <LinearGradient 
                        colors={['#70C1B3', '#247BA0']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.buttonLogin}
                        >
                            <Text style={styles.textSing}>Sing In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={{paddingTop: 15}}>
                    <View style={styles.lineText}> 
                        <LinearGradient
                        colors={['transparent', '#666']}
                        start={{x: 0, y: 0.5 }}
                        end={{x: 1, y: 0.5}}
                        style={styles.line}
                        />
                            <Text style={styles.text}> Or continue with </Text>
                        <LinearGradient
                        colors={['#666', 'transparent']}
                        start={{x: 0, y: 0.5 }}
                        end={{x: 1, y: 0.5}}
                        style={styles.line}
                        />
                    </View>
                    <View style={styles.allLogin}>
                        <TouchableOpacity style={styles.touchLogin}>
                            <Image
                            source={require('../assets/pesquisa.png')}
                            style={styles.imgsLogin}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.touchLogin}>
                            <Image
                            source={require('../assets/logotipo-da-apple.png')}
                            style={styles.imgsLogin}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.touchLogin}>
                            <Image
                            source={require('../assets/facebook.png')}
                            style={styles.imgsLogin}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{paddingTop: 40}}>
                    <Text  style={{color: '#666', fontSize: 17}}> Don't have on account?</Text>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('CreateAccount') }
                    >
                        <Text style={{color: '#3C91E6', fontSize: 17}}> Register Now  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#040a24", 
        padding: 20
    },

    campoLogin: {
        alignItems: 'center',
        paddingTop: 40,
    },

    imgLogin: {
        width: 150, 
        height: 150, 
        borderRadius: 50
    }, 

    textLogin: {
        color: "#fff",
        fontSize: 55, 
        fontWeight: "bold",
        marginTop: 50
    },

    InputsContainer: {
        flexDirection: 'row', 
        alignItems:  'center', 
        backgroundColor: '#686963',
        borderRadius: 10, 
        marginTop: 30, 
        paddingHorizontal: 20,
    },

    icons: {
        width: 20, 
        height: 20,
        marginRight: 10, 
        tintColor: '#C6C5B9'
    },

    Inputs: {
        flex: 1, 
        height: 50, 
        color: '#fff'
    }, 

    areaLogin: {
        paddingTop: 70
    }, 

    buttonLogin: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems: 'center',
    }, 

    textSing: {
        fontSize: 25, 
        fontWeight: "bold", 
        textAlign: 'center', 
        color: "#fff",
    }, 

    lineText: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginVertical: 20, 
    },

    line: {
        flex: 1,
        height: 4, 
        marginHorizontal: 10, 
        borderRadius: 2,
    },

    text: {
        fontSize: 16,
        color: '#666'
    },

    allLogin: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        paddingHorizontal: 60, 
        paddingTop: 15,
    },

    touchLogin: {
        backgroundColor: "#020100",
        width: 60, 
        height: 60,
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 10, 
        borderRadius: 10
    },

    imgsLogin: {
        width: 40, 
        height: 40
    }
})