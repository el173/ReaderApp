import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ClickableRow = ({newsItem, navigation}) => {
  const {title} = newsItem;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('detailView')}>
      <View style={styles.titleContainer}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginBottom: 10,
  },
  titleContainer: {
    margin: 15,
  },
});

export default ClickableRow;
