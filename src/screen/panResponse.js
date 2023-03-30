import React, { useRef } from "react";
import { View, Text, PanResponder, StyleSheet, Animated } from "react-native";

const PanResponseComp = () => {
    const animation = useRef(new Animated.Value(0)).current;
    const pan = useRef(new Animated.ValueXY()).current;
    let oldpos = {X : 0 , Y : 0}

    const fading = (val) => {
        Animated.spring(animation, {
            toValue: val,
            useNativeDriver: true,
        }).start();
    };

    let init = 0;
    setInterval(() => {
        fading(init);
        console.log(init);
        init ? (init = 0) : (init = 1);
    }, 1000);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gesturestate) => {
            // console.log(pan.x, pan.y);
            let x = oldpos.X + gesturestate.dx
            let y = oldpos.Y + gesturestate.dy
            pan.setValue({ x: x , y: y });
        },
        onPanResponderRelease: () => {
            // Animated.spring(
            //     pan,
            //     { toValue: { x: 0, y: 0 }, useNativeDriver: true }
            // ).start();
            oldpos.X = parseFloat(JSON.stringify(pan.x))
            oldpos.Y = parseFloat(JSON.stringify(pan.y))
        },
    });

    return (
        <View style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[
                    styles.box,
                    {
                        opacity: animation,
                        transform: [
                            { translateX: pan.x },
                            { translateY: pan.y },
                        ],
                    },
                ]}
            ></Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#333",
        justifyContent:'center',
        alignItems:'center' ,
    },
    box: {
        backgroundColor: "#61dafb",
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});

export default PanResponseComp;
