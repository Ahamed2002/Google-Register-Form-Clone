import { View, StyleSheet } from "react-native";
import { Button, TextInput, Text, List } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useState } from "react";
const data = [
    { label: ' Jan', value: 'Jan' },
    { label: ' Feb', value: 'Feb' },
    { label: ' Mar', value: 'Mar' },
    { label: ' Apr', value: 'Apr' },
    { label: ' May', value: 'May' },
    { label: ' Jun', value: 'Jun' },
    { label: ' Jul', value: 'Jul' },
    { label: ' Aug', value: 'Aug' },
];

const data1 = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Rather Not Say', value: 'Rather Not Say' },
    { label: 'Custom', value: 'Custom' }
];

export default function AboutScreen({ navigation , route }) {

    const { name } = route.params;

    const [value, setValue] = useState(null);
    const [value1, setValue1] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus1, setIsFocus1] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    const renderLabel1 = () => {
      if (value || isFocus1) {
          return (
              <Text style={[styles.label, isFocus1 && { color: 'blue' }]}>
                  Dropdown label
              </Text>
          );
      }
      return null;
  };

    return (
        <View style={styles.Container}>
            <View style={{ gap: 5 }}>
                <Text style={{ color: "white", textAlign: "center" }} variant="headlineMedium"> Google</Text>
                <Text style={{ color: "white", textAlign: "center" }} variant="headlineSmall">Basic Imformation</Text>
                <Text style={{ color: "gray", textAlign: "center" }} variant="bodyLarge"> Enter Your birthday and Gender</Text>
            </View>
            <View style={{flexDirection : "row" , alignItems : "center" , justifyContent : "space-between"}}>
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Month' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
                <TextInput keyboardType="numeric" style={{ backgroundColor: "black" , width : 100 , height : 60 }} textColor="darkgrey" mode="outlined" outlineColor="#f2f2f2" activeOutlineColor="#4285F4" label="Day" placeholder="Day" />
                <TextInput keyboardType="numeric" style={{ backgroundColor: "black" , width : 100 , height : 60 }} textColor="darkgrey" mode="outlined" outlineColor="#f2f2f2" activeOutlineColor="#4285F4" label="Year" placeholder="Year" />
            </View>
            <Dropdown
                    style={[styles.dropdown1, isFocus1 && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle1}
                    selectedTextStyle={styles.selectedTextStyle1}
                    inputSearchStyle={styles.inputSearchStyle1}
                    iconStyle={styles.iconStyle1}
                    data={data1}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Gender' : '...'}
                    searchPlaceholder="Search..."
                    value={value1}
                    onFocus={() => setIsFocus1(true)}
                    onBlur={() => setIsFocus1(false)}
                    onChange={item => {
                        setValue1(item.value);
                        setIsFocus1(false);
                    }}
                />
            <Button style={styles.NxtBtn} mode="contain" textColor="black" 
            onPress={() => navigation.navigate("Email" ,{
              name : name
            })}>Next</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "black",
        gap: 15,
        padding: 30,
    },
    NxtBtn: {
        backgroundColor: "#4285F4",
        width: 100,
        marginHorizontal: 250,
        borderRadius: 5
    },
    dropdown: {
        width : 100,
        height: 60,
        borderColor: 'darkgrey',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth : 1,
        marginTop : 4
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
        color : "grey"
      },
      selectedTextStyle: {
        fontSize: 16,
        color : "white"
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },


    //   Dropdown one

    dropdown1: {
        height: 60,
        borderColor: 'darkgrey',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingHorizontal: 10,
        borderWidth : 1,
        marginTop : 4
      },
      icon1: {
        marginRight: 5,
      },
      label1: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle1: {
        fontSize: 16,
        color : "darkgrey"
      },
      selectedTextStyle1: {
        fontSize: 16,
        color : "white"
      },
      iconStyle1: {
        width: 20,
        height: 20,
      },
      inputSearchStyle1: {
        height: 40,
        fontSize: 16,
      },
})