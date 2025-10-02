import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { Checkbox } from "react-native-paper";

export default function CreateInformatio(){
    const [aceitou, setAceitou] = useState(false);
    const navigation = useNavigation();

    //Para o droppeker sem pegar da api(mocado)
    const [open, setOpen] = useState(false); 
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Ele/Dele', value: 'ele'}, 
        { label: "Ela/Dela", value: "ela" },
        { label: "Elu/Delu", value: "elu" },
        { label: "Outro", value: "outro" },
        { label: "Prefiro não informar", value: "nenhum" },
    ])

    //const para o chekbox de termos
    const [marketing, setMarketing] = React.useState(false);
    const [termos, setTermos] = React.useState(false);

    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity 
                onPress={() => navigation.navigate('CreateAccount')}
                >
                    <Image
                    style={styles.imgBack}
                    source={require('../assets/back.png')}
                    />
                </TouchableOpacity>
            </View>

            <View style={{paddingTop: 35}}>
                <Text style={styles.textCreate}>
                    Creating an account
                </Text>
            </View>

            <View>
                <View style={styles.viewNameusers}>
                    <TextInput 
                    placeholder="Username"
                    style={styles.input01}
                    placeholderTextColor="#aaa"
                    />
                    <Text style={styles.textNameusers}>
                        You don't have to use your real name, you can choose another name to hide to maintain your privacy
                    </Text>
                </View>

                <View style={styles.viewNiversario}>
                    <Text style={styles.textniversario}> When is your birthday?</Text>
                    <View style={styles.allInputsNiver}>
                        <View>
                            <TextInput 
                            keyboardType="numeric"
                            placeholder="MM"
                            placeholderTextColor="#aaa"
                            style={styles.inputsNiver}
                            />
                        </View>

                        <View>
                            <TextInput 
                            keyboardType="numeric"
                            placeholder="DD"
                            placeholderTextColor="#aaa"
                            style={styles.inputsNiver}
                            />
                        </View>

                        <View>
                            <TextInput 
                            keyboardType="numeric"
                            placeholder="AAAA"
                            placeholderTextColor="#aaa"
                            style={styles.inputsNiver}
                            />
                        </View>
                    </View>
                    <Text style={styles.subTextNiversario}>Your bitthday will only be visible to you and the Readify support team
                    </Text>
                </View>

                <View style={styles.viewPronome}
                >
                    <DropDownPicker 
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="Pronomes (Opicional)"
                    placeholderStyle={{ color: '#aaa'}}
                    style={styles.inputPronome}
                    dropDownContainerStyle={{ 
                        borderColor: '#aaa',
                        backgroundColor: '#040a24', 
                    }}
                    listItemLabelStyle={{ color: '#aaa'}}
                    textStyle={{ color: '#aaa'}}
                    />

                    <Text style={styles.subTextNiversario}>
                        Your pronouns are visible only to you and the Readify support team. You can update them at any time in your account settings.
                    </Text>
                </View> 

                <View style={styles.viewTermosCondicion}>
                    <View>
                        <Checkbox 
                        status={marketing ? "checked" : "unchecked"}
                        onPress={() => setMarketing(!marketing)}
                        color="#aaa"
                        />
                    </View>

                    <View> 
                        <Text style={styles.textCondition}>
                            Yes, I would like to receive marketing emails from Readify(Optional)
                        </Text>
                        <Text style={styles.textConditionLow}>
                            Get story recomendations, annoucenments, offces, and more via email. 
                            Unsubscribe anytime
                        </Text>
                    </View>
                </View>

                <View style={styles.viewTermosCondicion}>
                    <View>
                        <Checkbox 
                        status={termos ? "checked" : "unchecked"}
                        onPress={() => setTermos(!termos)}
                        color="#aaa"
                        />
                    </View>

                    <View>
                        <Text style={styles.textCondition}>
                            Yes, I have read and agree to Readify's terms of service and privacy policy.
                        </Text>
                    </View>
                </View>
            </View>

            <View style ={styles.createAccont}>
                <TouchableOpacity 
                onPress={() => navigation.navigate('Creategenre')}
                style={styles.buttoCreate}>
                    <Text style={styles.textCreateAcont}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 30, 
        paddingTop: 50, 
        backgroundColor: '#040a24', 
        color: '#fff'
    },

    imgBack: {
        width: 35, 
        height: 35
    }, 

    textCreate: {
        color: "#fff", 
        fontSize: 30, 
        fontWeight: 'bold'
    }, 

    viewNameusers: {
        marginBottom: 20, 
        paddingTop: 40
    }, 

    input01: {
        width: '100%', 
        borderWidth: 1, 
        borderColor: '#aaa',
        borderRadius: 20, 
        paddingTop: 10, 
        color: '#fff', 
        marginBottom: 5,
        paddingHorizontal: 20,
        height: 50, 
    }, 

    textNameusers: {
        color: '#fff', 
        fontSize: 15,
    }, 

    viewNiversario: {
        paddingTop: 30
    }, 

    textniversario: {
        color: '#fff', 
        fontSize: 18, 
    }, 

    allInputsNiver: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        paddingTop: 15
    }, 

    inputsNiver: {
        borderWidth: 1, 
        borderColor: '#aaa',
        width: 100, 
        height: 50, 
        borderRadius: 20, 
        color: '#fff', 
        paddingHorizontal: 20
    }, 

    subTextNiversario: {
        fontSize: 15, 
        color: '#fff',
        paddingTop: 6
    }, 

    viewPronome: {
        paddingTop: 30
    }, 

    inputPronome: {
        width: '100%', 
        borderWidth: 1, 
        borderColor: '#aaa', 
        height: 50,
        borderRadius: 20,
        color: '#fff', 
        paddingLeft: 20, 
        backgroundColor: '#040a24'
    }, 

    viewTermosCondicion: {
        flexDirection: 'row',
        paddingTop: 30, 
    }, 

    textCondition: {
        fontSize: 15, 
        color: "#FFF", 
    }, 

    textConditionLow: {
        fontSize: 13, 
        color: "#aaa"
    }, 

    createAccont: {
        paddingTop: 50, 
    },

    buttoCreate: {
        width: '100%', 
        height: 40, 
        backgroundColor: '#fff',
        borderRadius: 20, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 

    textCreateAcont: {
        fontSize: 15, 
        fontWeight: 'bold'
    }
})