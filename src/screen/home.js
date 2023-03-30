import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

function Home({navigation }) {
    const isDarkMode = useColorScheme() === "dark";

    const backgroundStyle = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor='dodgerblue'
                showHideTransition="slide"
                hidden={true}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <View>
                    <Text>hello world</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PanResponseComp')}>
                    <Text style={styles.buttonText}>PanResponse</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VideoComp')}>
                    <Text style={styles.buttonText}>Video</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VibrationComp')}>
                    <Text style={styles.buttonText}>VibrationComp</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "dodgerblue",
        width: 100,
        alignItems: "center",
        margin: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
    },
});

export default Home;
