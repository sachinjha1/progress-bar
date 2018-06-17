import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


const TweetQuery = ({_setProgressValue, _reloadProgressBar, _progressValue, classes}) => (
  <div>
  <form className={classes.container} noValidate autoComplete="off">
    <TextField
      id="value"
      required
      label="Value"
      className={classes.textField}
      value={_progressValue}
      onChange={(event) => _setProgressValue(event.target.value)}
      helperText="Please enter your progress percentage"
      margin="normal"
    />
    </form>
  </div>
);

TweetQuery.propTypes = {
  _progressValue: PropTypes.number,
  _setProgressValue: PropTypes.func,
  _reloadProgressBar: PropTypes.func,
};

export default withStyles(styles)(TweetQuery);

