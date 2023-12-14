import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider , MD3LightTheme } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import EmailScreen from './Screens/EmailScreen';
import Password from './Screens/PasswordScreen';
import SuccessScreen from './Screens/SuccessSCreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{
            statusBarColor: "black",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleAlign: "center"
          }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
            <Stack.Screen name="Email" component={EmailScreen} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="Success" component={SuccessScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}
