import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingNavigator from './OnboardingNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
