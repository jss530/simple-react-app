import React, {Component} from 'react';
import { connect } from 'react-redux';
import selectStudio from '../actions/select_studio';
import { bindActionCreators } from 'redux';


class StudioList extends Component {

  renderList() {
    const { studios } = this.props;

    return studios.studios.map((studio) => {
      return (
        <li key={studio.id} onClick={() => this.props.selectStudio(studio)} className='list-item'>{studio.name}</li>
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
