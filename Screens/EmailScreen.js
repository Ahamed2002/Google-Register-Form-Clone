import React from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button, RadioButton, TextInput } from 'react-native-paper';
export default function EmailScreen({ navigation , route }) {
    
    const { name } = route.params;

    const [isVisibleinput, setInputVisible] = useState(null)
    return (
        <View style={Styles.Container}>
            <View style={{ gap: 5 }}>
                <Text style={{ color: "white", textAlign: "center" }} variant="headlineMedium"> Google</Text>
                <Text style={{ color: "white", textAlign: "center" }} variant="headlineSmall">Choose Your Gmail Address</Text>
                <Text style={{ color: "gray", textAlign: "center" }} variant="bodyLarge">Pick Your Gmail Address or create Your Own</Text>
            </View>
            <RadioButton.Group onValueChange={newValue => setInputVisible(newValue)} value={isVisibleinput}>
                <View style={Styles.radioBtns}>
                    <View style={Styles.radio1}>
                        <RadioButton value="first" />
                        <Text style={{ color: "white" }}>{name}1223@gmail.com</Text>
                    </View>
                    <View style={Styles.radio2}>
                        <RadioButton value="second" />
                        <Text style={{ color: "white" }}>{name}2434@gmail.com</Text>
                    </View>
                    <View style={Styles.radio2}>
                        <RadioButton value="Third" />
                        <Text style={{ color: "white" }}>Create Your Own Gmail Address</Text>
                    </View>
                </View>
                {
                    isVisibleinput === 'Third' && (
                        <View style={Styles.EmailBtn}>
                            <TextInput style={{ backgroundColor: "black", height: 60 }} textColor="darkgrey" mode="outlined" outlineColor="#f2f2f2" activeOutlineColor="#4285F4" label="Email" placeholder="Enter Your Email" />
                        </View>) 
                }
                <View>
                    <Button style={Styles.NxtBtn} mode="contain" textColor="black" onPress={() => navigation.navigate("Password")}>Next</Button>
                </View>
            </RadioButton.Group>
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "black"
    },
    radioBtns: {
        padding: 24,
        gap: 20
    },
    radio1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        padding: 10
    },
    radio2: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        padding: 10
    },
    EmailBtn: {
        paddingVertical: 0,
        paddingHorizontal: 24,
        marginBottom: 10
    },
    NxtBtn: {
        backgroundColor: "#4285F4",
        width: 100,
        marginHorizontal: 285,
        borderRadius: 5
    }
})