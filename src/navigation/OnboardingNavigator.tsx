import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeStackNavigatorParamList} from './types';
import SignupScreen from '../screens/SignupScreen';
import BottomTabs from './Tabs';

const OnboardingStack =
  createNativeStackNavigator<HomeStackNavigatorParamList>();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <OnboardingStack.Screen name="signup" component={SignupScreen} />
      <OnboardingStack.Screen name="home" component={BottomTabs} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
