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
			return {...state, allCampuses: action.payload}
		case FETCH_CAMPUS:
			return {...state, singleCampus: action.payload}
		case DELETE_CAMPUS:
			const idToDelete = action.payload;
			return {...state, allCampuses: state.allCampuses.filter((item) => {
				console.log(item);
				console.log(item.id, 'and', idToDelete);
				return item.id !== idToDelete
			})}

		default:
			return state
	}
}
