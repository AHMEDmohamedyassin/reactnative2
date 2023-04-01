import {
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Button,
    PermissionsAndroid
} from "react-native";
import { RNCamera } from "react-native-camera";
import { useCamera } from "react-native-camera-hooks";
import RNFS from "react-native-fs";

const CameraComp = () => {
    const [{ cameraRef }, { takePicture }] = useCamera(null);
    requestPermission()
    const TackPictureHandler = async () => {
        try {
            const data = await takePicture();
            RNFS.moveFile(
                data.uri,
                RNFS.DownloadDirectoryPath +`/${Math.ceil(Math.random() * 1000000)}.jpg`)
                .then(() => {
                    console.log(
                        "image moved to : ",
                        RNFS.DownloadDirectoryPath
                    );
                })
                .catch((e) => {
                    console.log(e);
                });
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <RNCamera ref={cameraRef} type={RNCamera.Constants.Type.back}>
                <Button
                    title="take picture"
                    onPress={() => TackPictureHandler()}
                />
            </RNCamera>
        </View>
    );
};

export default CameraComp;


const requestPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "Cool Photo App Camera Permission",
                message:
                    "Cool Photo App needs access to your camera " +
                    "so you can take awesome pictures.",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK",
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera");
        } else {
            console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};