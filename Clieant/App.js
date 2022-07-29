import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import LoginScreen from './src/views/screens/LoginScreen';
import RegisterScreen from './src/views/screens/RegisterScreen';
import ForgotPasswordScreen from './src/views/screens/ForgotPasswordScreen';
import Splash from './src/views/screens/splash/Splash';
import AvatarScreen from './src/views/screens/AvatarScreen ';
import VirtualRoom from './src/views/screens/VirtualRoom';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{headersShown: false}}
        initialRouteName="Splash">
        <Stack.Screen
          name="BoardScreen"
          component={OnBoardScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FrogetPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={BottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AvatarScreen"
          component={AvatarScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VirtualRoom"
          component={VirtualRoom}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <AvatarScreen />
  );
};

export default App;
