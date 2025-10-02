import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import bookChoice from "../modules/bookchoice/screens/bookChoice";
import bookBibliotheca from "../modules/bookBibliotheca/screens/bookBibliotheca";
import bookSearch from "../modules/bookSearch/screens/bookSearch";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#75DDDD',
        tabBarStyle: {
            backgroundColor: '#00003D',
            borderTopWidth: 0
        }
        }}>
            <Tab.Screen 
            name="booksChoice" 
            component={bookChoice} 
            options={{
                tabBarIcon: ({ color, size}) => (
                    <Ionicons 
                    name="home" 
                    size={28}
                    color={color} 
                    />
                )
            }}
            />
            <Tab.Screen 
            name="bookSearch" 
            component={bookSearch} 
            options={{
                tabBarIcon: ({ color, size}) => (
                    <Ionicons 
                    name="search"
                    size={28}
                    color={color}
                    />
                )
            }}
            />
            <Tab.Screen 
            name="bookBibliotheca" 
            component={bookBibliotheca} 
            options={{
                tabBarIcon: ({ color, size}) => (
                    <Ionicons 
                    name="library"
                    color={color}
                    size={28}
                    />
                )
            }}
            />
        </Tab.Navigator>
    );
}