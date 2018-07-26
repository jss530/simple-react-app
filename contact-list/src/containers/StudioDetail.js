import React, {Component} from 'react';
import { connect } from 'react-redux';

class StudioDetail extends Component {

  render() {
    if(!this.props.studio) {
      return (
        <div>Select a studio from the list to see its details</div>
      );
    } else {
      return (
        <div>
          <h3>Studio details for: {this.props.studio.name} </h3>
          <div>Phone: {this.props.studio.phone}</div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return (
    studio: state.activeStudio
  );
}

export default connect(mapStateToProps)(StudioDetail);
