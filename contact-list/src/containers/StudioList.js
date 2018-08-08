import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectStudio from '../actions/select_studio';

import './StudioList.css';


class StudioList extends Component {

  renderList() {
    const { studios } = this.props;

    return studios.studios.map((studio) => {
      return (
            <li key={studio.id} onClick={() => this.props.selectStudio(studio)} className='list-item'>{studio.name}
              <br></br>
              Phone number: {studio.phone}
              <br></br>
            </li>
      );
    });
  }

  render() {
    return (
        <div>
          <ol className='studio-list'>
            {this.renderList()}
          </ol>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    studios: state.studios
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectStudio: selectStudio}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StudioList);
