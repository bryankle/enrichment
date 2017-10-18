import {
	FETCH_ALL_STUDENTS,
	FETCH_STUDENT,
	DELETE_STUDENT,
	CREATE_STUDENT,
	EDIT_STUDENT
} from '../actions/types';

export default (state = {}, action) => {
	switch(action.type) {
		case FETCH_ALL_STUDENTS:
			return {...state, allStudents: action.payload}
		case FETCH_STUDENT:
			return {...state, singleStudent: action.payload}
		case DELETE_STUDENT:
			const idToDelete = action.payload;
			return {...state, allStudents: state.allStudents.filter((item) => {
				console.log(item);
				console.log(item.id, 'and', idToDelete);
				return item.id !== idToDelete
			})}
		default:
			return state
	}
}
