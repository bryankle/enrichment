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
			return {...state,
					allStudents: [...state.allStudents, action.payload]
				};
		case DELETE_STUDENT:
			const idToDelete = action.payload;
			return {...state, 
					allStudents: state.allStudents.filter(item => {
						return item.id !== idToDelete
					})}
		case EDIT_STUDENT:
			return {...state,
				singleStudent: {
					...state.singleStudent,
					campus: {
						...state.campus,
						name: action.payload.campusName
					},
					email: action.payload.email,
					name: action.payload.name
				}
			};
		default:
			return state
	}
}
