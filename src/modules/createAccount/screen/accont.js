import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";



export default function CreateAccount() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigation = useNavigation();

    return (
        <View style={styles.areaCrateCont}>
            <View style={styles.viewCreate01}>
                <Image 
                style={styles.imageCreateAccout}
                source={require('../assets/iconelivro.jpg')}
                />
                <Text style={styles.text01login}>Get Started</Text>
            </View>

            <View>
                <View style={styles.viewInputs}>
                    <Image 
                    source={require('../assets/do-utilizador.png')}
                    style={styles.icons}
                    />

                    <TextInput 
                    style={styles.inputs}
                    placeholder="Name"
                    placeholderTextColor="#C6C5B9"
                    />
                </View>

                <View style={styles.viewInputs}>
                    <Image 
                    source={require('../assets/do-utilizador.png')}
                    style={styles.icons}
                    />

                    <TextInput 
                    style={styles.inputs}
                    placeholder="Email"
                    placeholderTextColor="#C6C5B9"
                    />
                </View>

                <View style={styles.viewInputs}>
                    <Image 
                    source={require('../assets/trancar.png')}
                    style={styles.icons}
                    />

                    <TextInput 
                    style={styles.inputs}
                    placeholder="Passsword"
                    placeholderTextColor="#C6C5B9"
                    secureTextEntry={!passwordVisible}
                    />

                    <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}
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

                <View style={styles.areaSingIn}>
                    <TouchableOpacity onPress={() => navigation.navigate('CreateInformation')}>
                        <LinearGradient 
                        style={styles.buttonSingIn}
                        colors={['#70C1B3', '#247BA0']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        >
                            <Text style={styles.textSing}>Create account</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View> 

                <View style={{paddingTop: 15}}>
                    <View style={styles.lineText}>
                        <LinearGradient
                        colors={['transparent', '#666']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.line}
                        />
                        <Text style={styles.textLine}> Or Continue with </Text>
                        <LinearGradient
                        colors={['#666', 'transparent']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.line}
                        />
                    </View>
                </View>

                <View style={styles.allLogin}>
                    <TouchableOpacity
                    style={styles.buttonAnotherLogin}
                    >
                        <Image 
                        style={styles.loginsAnother}
                        source={require('../assets/pesquisa.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={styles.buttonAnotherLogin}
                    >
                        <Image 
                        style={styles.loginsAnother}
                        source={require('../assets/logotipo-da-apple.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity 
                    style={styles.buttonAnotherLogin}
                    >
                        <Image 
                        style={styles.loginsAnother}
                        source={require('../assets/facebook.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{paddingTop: 30}}>
                    <Text style={{fontSize: 17, color: "#666", fontWeight: 'bold'}}> Already have an account?</Text>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{fontSize: 17, color: "#3C91E6", fontWeight: 'bold'}}> Log in </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles =  StyleSheet.create({
    areaCrateCont: {
        flex: 1,
        padding: 20,
        backgroundColor: "#04293b"
    }, 

    viewCreate01: {
        paddingTop: 20,
        justifyContent: 'center', 
        alignItems: 'center'
    },

    imageCreateAccout: {
        width: 150, 
        height: 150, 
        borderRadius: 50
    }, 

    text01login: {
        marginTop: 30,
        color: "#fff",
        fontSize: 55, 
        fontWeight: 'bold',
    },  

    viewInputs: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: "#686963", 
        borderRadius: 10, 
        marginTop: 30, 
        paddingHorizontal: 20, 
    },

    icons: {
        width: 20, 
        height: 20
    }, 

    inputs: {
        flex: 1, 
        height: 50, 
        marginLeft: 10, 
        color: "#fff"
    }, 

    areaSingIn: {
        paddingTop: 60,
    }, 

    buttonSingIn: {
        width: '100%', 
        height: 50, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 

    textSing: {
        fontSize: 25, 
        color: '#fff', 
        fontWeight: 'bold', 
        textAlign: 'center', 
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
        borderRadius: 2
    },

    textLine: {
        fontSize: 17, 
        color: '#666'
    }, 

    allLogin: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 55, 
        paddingTop: 20, 
    },

    buttonAnotherLogin: {
        height: 60, 
        width: 60, 
        backgroundColor: '#020100', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 10, 
        padding: 10
    },

    loginsAnother: {
        height: 40, 
        width: 40
    }, 
})