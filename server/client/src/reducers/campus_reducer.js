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
		case REMOVE_STUDENT:
			const removedStudentId = action.payload;
			let currentStudents = [...state.singleCampus.students]
			var removedStudent = currentStudents.find(function(student) {
				return student.id === removedStudentId;
			})
			removedStudent.campusId = null;
			console.log('currentStudents', currentStudents)
			// console.log('updateRemoved', updateRemoved)
			console.log('REDUCER - REMOVE_STUDENT')
			// console.log('removedStudentId', removedStudentId);
			console.log('state.singleCampus', state.singleCampus)
			console.log('currentStudents', currentStudents);
			return {
				...state,
				singleCampus: {
					...state.singleCampus,
					students: currentStudents
				}
			}
		default:
			return state
	}
}
