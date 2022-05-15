import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

import {GET_ITEM_DETAILS} from '../actionTypes';

const DetailView = ({navigation, kids, getItemDetails, itemDetails}) => {
  useEffect(() => {
    getItemDetails(kids);
  }, []);

  if (itemDetails.length <= 0) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={'#178DE7'} />
      </View>
    );
  }

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
    itemDetails: state.detailsViewReducer,
    ...props.route.params,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getItemDetails: payload => {
      dispatch({
        type: GET_ITEM_DETAILS,
        payload,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
