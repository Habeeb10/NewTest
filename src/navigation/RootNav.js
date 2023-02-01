import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding';
import {StatusBar} from 'react-native';
import NotchResponsive from '../components/NotchResponsive';
import TermsAndPrivacy from '../screens/TermsPrivacy';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <NotchResponsive />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />

        <Stack.Screen name="TermsPrivacy" component={TermsAndPrivacy} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
