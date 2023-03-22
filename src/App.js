import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Camera from "./screen/camera";
import Home from "./screen/home";
import Video from "./screen/video";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                  headerStyle:{backgroundColor:'tomato'},
                  headerTitleAlign:'center',
                  headerTitleStyle:{color:'#fff' , fontWeight:'bold'},
                  headerTintColor:'#fff',     // زر الرجوع
                  // headerShown:false
                }}
            >
                <Stack.Screen name="Home" component={Home} options={{
                  headerTitle:'home page',
                  headerStyle:{backgroundColor:'tomato'},
                  headerTitleAlign:'center',
                  headerTitleStyle:{color:'#fff' , fontWeight:'bold'},
                }}/>
                <Stack.Screen name="Camera" component={Camera} />
                <Stack.Screen name="Video" component={Video} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
