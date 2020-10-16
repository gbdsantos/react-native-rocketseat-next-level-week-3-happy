import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanageData from './screens/CreateOrphanage/OrphanageData';
import OrphanageDetails from './screens/OrphanageDetails';
import OrphanagesMap from './screens/OrphanagesMap';
import SelectMapPosition from './screens/CreateOrphanage/SelectMapPosition';

import Header from './components/Header';

export default function Routes() {
  const headerOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Navigator screenOptions={headerOptions}>
        <Screen component={OrphanagesMap} name="OrphanagesMap" />
        <Screen
          component={OrphanageDetails}
          name="OrphanageDetails"
          options={{
            headerShown: true,
            header: () => <Header title="Orfanato" showCancel={false} />,
          }}
        />
        <Screen
          component={OrphanageData}
          name="OrphanageData"
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" />,
          }}
        />
        <Screen
          component={SelectMapPosition}
          name="SelectMapPosition"
          options={{
            headerShown: true,
            header: () => <Header title="Selecione no mapa" />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
