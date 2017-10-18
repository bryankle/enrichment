import {
	FETCH_ALL_CAMPUS,
	FETCH_CAMPUS,
	REMOVE_STUDENT,
	EDIT_CAMPUS,
	CREATE_CAMPUS,
	DELETE_CAMPUS
} from '../actions/types';

export default (state = {}, action) => {
	switch(action.type) {
		case FETCH_ALL_CAMPUS:
			return action.payload
		default:
			return state
	}
}
