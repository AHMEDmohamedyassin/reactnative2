import React from "react";
import { View, Text, Vibration, Button, Platform } from "react-native";

const VibrationComp = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#444" }}>
            <Button
                title="start vibration"
                onPress={() => Vibration.vibrate(100000)}
                color="dodgerblue"
            />
            <View style={{ width: "100%", marginVertical: 20 }}></View>
            <Button
                title="stop vibration"
                onPress={() => Vibration.cancel()}
                color="tomato"
            />
            <View style={{ width: "100%", marginVertical: 20 }}></View>

            {/*platform informations*/}
            <Text
                style={{
                    textAlign: "center",
                    fontSize: 20,
                    marginVertical: 20,
                    color: "#fff",
                }}
            >
                platform info
            </Text>
            <Text style={{ color: "#fff", textAlign: "center" }}>
                {JSON.stringify(Platform)}
            </Text>
        </View>
    );
};

export default VibrationComp;

/*
READ_CALENDAR – android.permission.READ_CALENDAR – This is used for asking permissions to access the calendar application of an android phone.
RECORD_AUDIO – android.permission.RECORD_AUDIO – This is used for asking permissions to record audio.
CALL_PHONE – android.permission.CALL_PHONE – This is used for asking permissions to access the calling app.
WRITE_CALL_LOG – android.permission.WRITE_CALL_LOG – This is used for asking permissions to edit the call log.
SEND_SMS – android.permission.SEND_SMS – This is used for asking permissions to send SMS.
READ_SMS – android.permission.READ_SMS – This is used for asking permissions to read the messages of the android phone.
READ_EXTERNAL_STORAGE – android.permission.READ_EXTERNAL_STORAGE – This is used for asking permissions to read the external storage.
CAMERA – android.permission.CAMERA – This is used for asking permissions to access the camera of the android phone.
WRITE_CONTACTS – android.permission.WRITE_CONTACTS – This is used for asking permissions to edit the contacts of the android phone.



const requestCameraPermission = async () => {
    try {
    const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.VIBRATION,
    {
    title: "Permission for Captureeeee Extraaaodrinary Application",
    message:
    "For your beautiful pictures, " +
    "Grant permission to Captureeeee Extraaaordinary Application",
    buttonNeutral: "Not Right Now!",
    buttonNegative: "Cancel",
    buttonPositive: "Alright"
    }
    );
    }catch(e){}
    }
    requestCameraPermission()

*/
