import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DetailProps } from '../types';

const Detail = (_props: DetailProps) => {
  return (
    <View style={styles.container}>
      <Text>Detail screen</Text>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
