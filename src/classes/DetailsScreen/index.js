import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
// import { addPlace } from './src/actions/place';
import { DetailsComp } from '../../components/DetailsComp';
import Carousal from '../../components/Carousal/index';

const DetailsScreen = () => {

  return (
    <View>
      <Carousal />
      <DetailsComp />
    </View>

  );
}


const mapStateToProps = (state) => {
  console.log("hggh", state.places.places)
  return {
    places: state.places.places
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (name) => {
      dispatch(addPlace(name))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen)