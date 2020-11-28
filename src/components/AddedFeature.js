import React from 'react';
import { connect } from 'react-redux';
//import remove Feature from carActions
import { removeFeature } from '../actions/carActions';

//Make an action creator 'removeFeature'
//action type REMOVE_FEATURE, payload feature

//Reducer
//Remove chosen from features
//compute a new price
//move chosen to additional features

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {() => props.removeFeature(props.feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
