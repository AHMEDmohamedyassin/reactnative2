import React from "react";
import { View, Text } from "react-native";
import Video from "react-native-video";
import VideoPlayer from "react-native-video-controls";

const VideoComp = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>video screen</Text>
            <Video
                source={{ uri: "https://vjs.zencdn.net/v/oceans.mp4" }}
                style={{ height: 200, width: "100%" }}
                controls={true}
                resizeMode="contain"
            />
            <VideoPlayer
                source={{ uri: "https://vjs.zencdn.net/v/oceans.mp4" }}
                style={{height:200 , width:'100%' , marginVertical:50}}
                disableFullscreen={false}
                disableBack={true}
                tapAnywhereToPause={true}
                seekColor="tomato"
                showOnStart={false}
                controlAnimationTiming={1000} // animation
                scrubbing={2}
            />
        </View>
    );
};

export default VideoComp;
