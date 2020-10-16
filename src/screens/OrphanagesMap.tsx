import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import mapMarker from '../images/map-marker.png';

export default function OrphanagesMap() {
  const { navigate } = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigate('OrphanageDetails');
  }

  function handleNavigateToCreateOrphanage() {
    navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -23.6465523,
          longitude: -46.7928053,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
      >
        <Marker
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{ latitude: -23.6465523, longitude: -46.7928053 }}
          icon={mapMarker}
        >
          <Callout onPress={handleNavigateToOrphanageDetails} tooltip>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>

        <RectButton
          onPress={handleNavigateToCreateOrphanage}
          style={styles.createOrphanageButton}
        >
          <Feather color="#FFF" name="plus" size={20} />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },

  calloutContainer: {
    height: 46,
    width: 160,

    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    fontFamily: 'Nunito_700Bold',
    justifyContent: 'center',
    paddingHorizontal: 16,

    elevation: 3,
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    bottom: 32,
    left: 24,
    right: 24,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    elevation: 3,
  },

  footerText: {
    color: '#8FA7b3',
    fontFamily: 'Nunito_700Bold',
  },

  createOrphanageButton: {
    height: 56,
    width: 56,

    backgroundColor: '#15c3d6',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
