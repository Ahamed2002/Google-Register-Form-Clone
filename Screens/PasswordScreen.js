import { View, StyleSheet } from 'react-native'
import { TextInput , Text , Button} from 'react-native-paper'

export default function Password({ navigation }) {
  return (
    <View style={Styles.Container}>
      <View style={{ gap: 5 }}>
        <Text style={{ color: "white", textAlign: "center" }} variant="headlineMedium"> Google</Text>
        <Text style={{ color: "white", textAlign: "center" }} variant="headlineSmall">Create a Strong Password</Text>
        <Text style={{ color: "gray", textAlign: "center" }} variant="bodyLarge"> Create a strong password with a mix of letters ,</Text>
        <Text style={{ color: "gray", textAlign: "center" }} variant="bodyLarge"> numbers and symbols</Text>
      </View>
      <TextInput style={{ backgroundColor: "black", height: 60 , marginTop : 20 }} textColor="darkgrey" mode="outlined" outlineColor="#f2f2f2" activeOutlineColor="#4285F4" label="Password" placeholder="Password" />
      <Button style={Styles.NxtBtn} mode="contain" textColor="black" onPress={() => navigation.navigate("Success")}>Next</Button>
    </View>
  )
}


const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "black",
    padding: 24
  },
  NxtBtn: {
    backgroundColor: "#4285F4",
    width: 100,
    marginHorizontal: 263,
    marginVertical : 20 ,
    borderRadius: 5
}
})

