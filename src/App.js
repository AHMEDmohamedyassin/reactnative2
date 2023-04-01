import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PanResponseComp from "./screen/panResponse";
import Home from "./screen/home";
import VideoComp from "./screen/video";
import VibrationComp from "./screen/vibration";
import CameraComp from "./screen/Camera";
import SensorsComp from "./screen/sensors";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "tomato" },
                    headerTitleAlign: "center",
                    headerTitleStyle: { color: "#fff", fontWeight: "bold" },
                    headerTintColor: "#fff", // زر الرجوع
                    // headerShown:false
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: "home page",
                        headerStyle: { backgroundColor: "tomato" },
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: "#fff", fontWeight: "bold" },
                    }}
                />
                <Stack.Screen name="PanResponseComp" component={PanResponseComp} />
                <Stack.Screen name="VideoComp" component={VideoComp} />
                <Stack.Screen name="VibrationComp" component={VibrationComp} />
                <Stack.Screen name="CameraComp" component={CameraComp} />
                <Stack.Screen name="SensorsComp" component={SensorsComp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default App;
