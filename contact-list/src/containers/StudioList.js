import React, {Component} from 'react';
import { connect } from 'react-redux';
import selectStudio from '../actions/select_studio';
import { bindActionCreators } from 'redux';

class StudioList extends Component {

  renderList() {
    return this.props.studios.map((studio) => {
      return (
        <li key={studio.phone} onClick={() => this.props.selectStudio(studio)} className='list-item'>{studio.name}</li>
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
