import * as types from './types';


export function setProgressValue(value) {
  return { type: types.SET_PROGRESS_VALUE, value };
}

