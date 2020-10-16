import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
