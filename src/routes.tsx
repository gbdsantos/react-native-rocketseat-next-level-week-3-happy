import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanageDetail from './screens/OrphanageDetails';
import OrphanagesMap from './screens/OrphanagesMap';

export default function Routes() {
  const options = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={options}>
        <Screen component={OrphanagesMap} name="OrphanagesMap" />
        <Screen component={OrphanageDetail} name="OrphanageDetails" />
      </Navigator>
    </NavigationContainer>
  );
}
