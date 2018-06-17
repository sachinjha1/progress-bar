import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressEntry from './progress-entry';
import ProgressBar from './progress-bar';
import {
  setProgressValue
} from '../../actions/progress-bar';
import { host, port } from '../../../../config';

class TweetsSearch extends React.Component {
  render() {

    return (
      <div>
        <ProgressEntry _setProgressValue={this.props.setProgressValue}
                       _reloadProgressBar={this.props.reloadProgressBar}
                       _progressValue={this.props.progressValue}
        />
        <br/>
        <ProgressBar _progressValue={this.props.progressValue}/>

      </div>
    );
  }
}


const searchTweets = async (dispatch, query) => {

  //URL for browser
  let hostUrl = `/api/tweet/stream?field=${query.field}&operator=${query.operator}&value=${encodeURIComponent(query.value)}`;
  if (typeof window === 'undefined') {
    //URL to use from NodeJS client (Server Side rendering)
    hostUrl = `http://${host}:${port}${hostUrl}`;
  }


};


TweetsSearch.propTypes = {
  progressValue: PropTypes.string,
  reloadProgressBar: PropTypes.func,
  setProgressValue: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    progressValue: state.progressValue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    reloadProgressBar: (progressValue) => reloadProgressBar(dispatch, progressValue),
    setProgressValue: (value) => dispatch(setProgressValue(value)),
  };
}


export default{
  component: connect(mapStateToProps, mapDispatchToProps)(TweetsSearch),
};
