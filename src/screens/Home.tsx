import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { HomeProps } from '../types';

const Home = (props: HomeProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 100)
  }, [])
  
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        testID='button'
        disabled={loading}
        onPress={() => {
          props.navigation.navigate('Detail');
        }}>
        <Text>Go to detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
