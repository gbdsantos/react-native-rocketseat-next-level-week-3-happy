import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanageData from './screens/CreateOrphanage/OrphanageData';
import OrphanageDetail from './screens/OrphanageDetails';
import OrphanagesMap from './screens/OrphanagesMap';
import SelectMapPosition from './screens/CreateOrphanage/SelectMapPosition';

import Header from './components/Header';

export default function Routes() {
  const headerOptions = {
    headerShown: false,
  };

  const headerOptions1 = {
    headerShown: true,
    header: () => <Header title="orfanato" />,
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={headerOptions}>
        <Screen component={OrphanagesMap} name="OrphanagesMap" />
        <Screen component={OrphanageDetail} name="OrphanageDetails" />
        <Screen component={OrphanageData} name="OrphanageData" />
        <Screen
          component={SelectMapPosition}
          name="SelectMapPosition"
          options={headerOptions1}
        />
      </Navigator>
    </NavigationContainer>
  );
}
