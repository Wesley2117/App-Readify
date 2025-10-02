import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../modules/welcome/screen/welcome";
import Login from "../modules/login/screens/login";
import CreateAccount from "../modules/createAccount/screen/accont";
import FinalCreateAccount from "../modules/createAccount/screen/finalCreate";
import CreateInformatio from "../modules/createAccount/screen/create";
import Routes from ".";

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="CreateInformation" component={CreateInformatio} />
            <Stack.Screen name="Creategenre" component={FinalCreateAccount} />
            <Stack.Screen name="Tabs" component={Routes} />
        </Stack.Navigator>
    );
}