import React, {Component} from 'react';
import { connect } from 'react-redux';

class StudioDetail extends Component {

  render() {
    const { studios } = this.props;

    if(!studios.studios.activeStudio) {
      return (
        <div>Select a studio from the list to see its details</div>
      );
    } else {
      return (
        <div>
          <h3>Studio details for: {studios.activeStudio.name} </h3>
          <div>Phone: {studios.activeStudio.phone}</div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    studios: state.activeStudio
  };
}

export default connect(mapStateToProps)(StudioDetail);
