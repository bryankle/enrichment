import {
	FETCH_ALL_CAMPUS,
	FETCH_CAMPUS,
	ADD_STUDENT,
	REMOVE_STUDENT,
	EDIT_CAMPUS,
	CREATE_CAMPUS,
	DELETE_CAMPUS
} from '../actions/types';

export default (state = {}, action) => {
	switch(action.type) {
		case FETCH_ALL_CAMPUS:
			return {...state, allCampuses: action.payload};
		case FETCH_CAMPUS:
			return {...state, singleCampus: action.payload};
		case CREATE_CAMPUS:
			return {
					...state,
					allCampuses: [...state.allCampuses, action.payload]
				};
		case DELETE_CAMPUS:
			const idToDelete = action.payload;
			return {...state, allCampuses: state.allCampuses.filter((item) => {
				return item.id !== idToDelete
			})};
		case ADD_STUDENT:
			const { studentId, allStudents } = action.payload;
			const campusId = state.singleCampus.id;
			let addedStudent = allStudents.find(student => {
				return student.id === studentId;
			});
			addedStudent.campusId = campusId;
			let filteredStudents = allStudents.filter(student => {
				return student.campusId === campusId;
			});
			return {
				...state,
				singleCampus: {
					...state.singleCampus,
					students: filteredStudents
				}
			}
		case REMOVE_STUDENT:
			const removedStudentId = action.payload;
			let currentStudents = [...state.singleCampus.students]
			var removedStudent = currentStudents.find(student => {
				return student.id === removedStudentId;
			});
			removedStudent.campusId = null;
			return {
				...state,
				singleCampus: {
					...state.singleCampus,
					students: currentStudents
				}
			}
		default:
			return state;
	};
};
