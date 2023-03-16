import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainNavigation} from './navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
