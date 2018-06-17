import initialState from './initial-state';
import {
  SET_PROGRESS_VALUE
} from '../actions/types'

export function progressValueReducer(state = initialState.progressValue, action) {
  switch (action.type) {
    case SET_PROGRESS_VALUE:
      return action.value;
    default:
      return state;
  }
}

