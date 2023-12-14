import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput ,Text } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
    const [ Name , setName] = useState('ahamed')
    const [ lastName , setLastName] = useState('')
    const [ error , setError] = useState({})

    const validation = () => {
        let error = {} ;

        if(!Name) error.Name = 'First Name is Required' ;
        if(!lastName) error.lastName = 'First Name is Required' ;

        setError(error);

        return Object.keys(error).length === 0 ;
    };

    const handleSubmit = () => {
        if (validation()){
            console.log('Submited' , Name , lastName);
            setError({});
        }
    }


    return (
        <View style={Styles.Container}>
            <View style={{ gap : 5 }}>
                <Text style={{ color : "white" , textAlign : "center"}} variant="headlineMedium"> Google</Text>
                <Text style={{ color : "white" , textAlign : "center"}} variant="headlineSmall"> Create a Google Account</Text>
                <Text style={{ color : "gray" , textAlign : "center"}} variant="bodyLarge"> Enter Your Name</Text>
            </View>
            <TextInput onChangeText={(val) => { setName(val)}} style={{ backgroundColor : "black" }} textColor="darkgrey" mode="outlined" outlineColor="#f2f2f2" activeOutlineColor="#4285F4" label="First Name" placeholder="First Name" />
            {
                error.Name ? <Text style={Styles.errorText}>{error.Name}</Text> : null
            }
            <TextInput onChangeText={setLastName} style={{ backgroundColor : "black" }} textColor="darkgrey" mode="outlined" outlineColor="#f2f2f2" activeOutlineColor="#4285F4" label="Last Name" placeholder="Last Name"/>
            {
                error.lastName ? <Text style={Styles.errorText}>{error.lastName}</Text> : null
            }
            <Button style={Styles.NxtBtn} mode="contain" textColor="black"  
               onPress={() => handleSubmit ?  navigation.navigate("About" , {name : Name}) : null}>Next</Button> 
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor : "black" ,
        gap: 15,
        padding: 30 ,
    },
    NxtBtn: {
        backgroundColor: "#4285F4",
        width : 100,
        marginHorizontal : 250 ,
        borderRadius : 5
    },
    errorText : {
        color : "red"
    }
})