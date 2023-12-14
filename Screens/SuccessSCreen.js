import { View, StyleSheet, Image } from 'react-native'
import { Text, Button } from 'react-native-paper'
import RNRestart from 'react-native-restart';

export default function SuccessScreen({ navigation }) {

    const handleSubmit = () => {
        RNRestart.Restart();
        navigation.navigate("Home")
    }

    return (
        <View style={Styles.Container}>
            <Text style={{ color: "white", marginVertical: 30 ,fontSize : 50}}>Success Screen</Text>
            <Button style={Styles.NxtBtn} mode="contain" textColor="black" onPress={handleSubmit}>Next</Button>
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black"
    },
    NxtBtn: {
        backgroundColor: "#4285F4",
        width: 100,
        marginHorizontal: 285,
        borderRadius: 5
    }
})