import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DetailView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginBottom: 10,
  },
});

export default DetailView;
