import { combineReducers } from 'redux';
import { progressValueReducer as progressValue} from './tweets';

const rootReducer = combineReducers({
  progressValue,
});

export default rootReducer;
