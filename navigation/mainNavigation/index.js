/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AddDetailScreen, DashboardScreen} from 'screens';

const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="dashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="addDetailScreen" component={AddDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
