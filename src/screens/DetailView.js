import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text} from 'react-native';

const DetailView = ({navigation, kids}) => {
  return (
    <View style={styles.container}>
      <Text>{kids[1]}</Text>
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

const mapStateToProps = (state, props) => {
  return {
    ...props.route.params,
  };
};

export default connect(mapStateToProps)(DetailView);
