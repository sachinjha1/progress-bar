import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});


const Tweet = ({ _progressValue, classes }) => (
  <div className={classes.root}>
    <LinearProgress variant="determinate" value={_progressValue} />
    <br />
    <LinearProgress color="secondary" variant="determinate" value={_progressValue} />
  </div>
);

Tweet.propTypes = {
  _progressValue:PropTypes.number,
};

export default withStyles(styles)(Tweet);
