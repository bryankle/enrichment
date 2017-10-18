import { combineReducers } from 'redux';
import campusReducer from './campus_reducer';
import studentReducer from './student_reducer';

const rootReducer = combineReducers({
	campus: campusReducer
	// student: studentReducer
});

export default rootReducer;