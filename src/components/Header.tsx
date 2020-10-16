import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel: boolean;
}

export default function Header({ showCancel = true, title }: HeaderProps) {
  const { navigate } = useNavigation();

  function handleGoBackToAppHomepage() {
    navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigate.goBack}>
        <Feather color="#15b6d6" name="arrow-left" size={24} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomepage}>
          <Feather color="#ff669d" name="x" size={24} />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    color: '#9fa7b3',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
  },
});
