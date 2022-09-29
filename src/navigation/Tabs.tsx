import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import {BottomTabNavigatorParamList} from './types';
import ProfileScreen from '../screens/ProfileScreen';
import Insights from '../screens/Insights';
import {AppIcons} from '../assets/icons';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../theme';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.black,
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                resizeMode="contain"
                source={AppIcons.userActive}
                style={styles.tabIcon}
              />
            ) : (
              <Image
                resizeMode="contain"
                source={AppIcons.userInactive}
                style={styles.tabIcon}
              />
            ),
        }}
      />
      <Tab.Screen
        options={{
          title: 'Insights',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                resizeMode="contain"
                source={AppIcons.infoActive}
                style={styles.tabIcon}
              />
            ) : (
              <Image
                resizeMode="contain"
                source={AppIcons.infoInactive}
                style={styles.tabIcon}
              />
            ),
        }}
        name="Insights"
        component={Insights}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    height: RFValue(30),
    width: RFValue(30),
    alignSelf: 'center',
    marginTop: RFValue(5),
  },
});

export default BottomTabs;
