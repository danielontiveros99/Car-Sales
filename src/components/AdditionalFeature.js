import React from 'react';
//connect this component
import { connect } from 'react-redux';

//import the add feature
import { addFeature } from '../actions/carActions';

//action type ADD_FEATURE, payload: feature

//remove the chosen feature form additional features
//add chosen features
//compute new price 
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//connect this component, Does not need Map state to Props because it hets all from the parent
// Only needs action creator functions

export default connect(null, {addFeature }) (AdditionalFeature);
