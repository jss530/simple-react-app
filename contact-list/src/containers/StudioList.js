import React, {Component} from 'react';
import { connect } from 'react-redux';
import selectStudio from '../actions/select_studio';
import { bindActionCreators } from 'redux';

import './StudioList.css';


class StudioList extends Component {

  renderList() {
    const { studios } = this.props;

    return studios.studios.map((studio) => {
      return (
        <ul className="studio-list">
          <li key={studio.id} onClick={() => this.props.selectStudio(studio)} className='list-item'>{studio.name}
          <br></br>
          Phone number: {studio.phone}</li>
          <br></br>
        </ul>
      );
    });
  }

  render() {
    return (
      <ul className='studio-list'>
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    studios: state.studios
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectStudio: selectStudio
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudioList);
