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

		case CREATE_STUDENT:
			console.log('ACTION - Creating a student');
			console.log('action.payload', action.payload)
			console.log('state', state)
			return {...state,
					allStudents: [...state.allStudents, action.payload]
				};
		case DELETE_STUDENT:
			const idToDelete = action.payload;
			return {...state, allStudents: state.allStudents.filter((item) => {
				console.log(item);
				console.log(item.id, 'and', idToDelete);
				return item.id !== idToDelete
			})}
		case EDIT_STUDENT:
			console.log('REDUCER - EDIT_STUDENT')
			return state;
		default:
			return state
	}
}
