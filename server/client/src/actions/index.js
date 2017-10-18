import axios from 'axios';
import {
	FETCH_ALL_CAMPUS, // WORKING
	FETCH_CAMPUS, // WORKING
	REMOVE_STUDENT, 
	EDIT_CAMPUS, 
	CREATE_CAMPUS, 
	DELETE_CAMPUS, 
	FETCH_ALL_STUDENTS,
	FETCH_STUDENT,
	DELETE_STUDENT,
	CREATE_STUDENT,
	EDIT_STUDENT
} from './types';

const ROOT_URL = 'http://localhost:3001';

// Campus actions
export const fetchAllCampus = () => {
	return dispatch => {
		axios.get(`${ROOT_URL}/api/campus`)
			.then(res => {
				console.log("Fetching all campuses...")
				dispatch({
					type: FETCH_ALL_CAMPUS,
					payload: res.data
				})
			})
	}
}

export const fetchCampus = (id) => {
	return dispatch => {
		axios.get(`${ROOT_URL}/api/campus/${id}`)
			.then(res => {
				console.log("Fetching a single campus...")
				console.log(res);
				dispatch({
					type: FETCH_CAMPUS,
					payload: res.data
				})
			})
	}
}

export const deleteCampus = (id) => {
	return dispatch => {
		axios.delete(`${ROOT_URL}/api/campus/delete/${id}`) // axios.delete doesn't work
			.then(res => {	// then does not execute body; axios.delete not resolving promise?
				console.log("Deleting a campus..."); 
				console.log(id)
				dispatch({
					type: DELETE_CAMPUS,
					payload: id
				})
			})
	}
}

export const removeStudent = (id) => {
	return dispatch => {
		axios.put(`${ROOT_URL}/api/campus/remove/${id}`)
			.then(res => {
				console.log('ACTION - Removing student');
				console.log(res.data);
				dispatch({
					type: REMOVE_STUDENT,
					payload: res.data
				})
			})
	}
}



// Student actions

export const fetchAllStudents = () => {
	return dispatch => {
		axios.get(`${ROOT_URL}/api/student`)
			.then(res => {
				dispatch({
					type: FETCH_ALL_STUDENTS,
					payload: res.data
				})
			})
	}
}

export const fetchStudent = (id) => {
	return dispatch => {
		axios.get(`${ROOT_URL}/api/student/${id}`)
			.then(res => {
				console.log("Fetching a student...")
				dispatch({
					type: FETCH_STUDENT,
					payload: res.data
				})
			})
	}
}

export const deleteStudent = (id) => {
	return dispatch => {
		axios.delete(`${ROOT_URL}/api/student/${id}`)
			.then(res => {	// then does not execute body; axios.delete not resolving promise?
				console.log("Deleting a student..."); 
				console.log(id)
				dispatch({
					type: DELETE_STUDENT,
					payload: id
				})
			})
	}
}


	// // Campus Routes
	// app.get('/api/campus', CampusController.fetchAllCampuses);
	// app.get('/api/campus/:id/', CampusController.fetchCampus)
	// app.put('/api/campus/remove/:studentId', CampusController.removeStudent)
	// app.put('/api/campus/:id/', CampusController.editCampus);
	// app.post('/api/campus', CampusController.createCampus);
	// app.delete('/api/campus/:id', CampusController.deleteCampus);

	// // Student Routes
	// app.get('/api/student', StudentController.fetchStudents);
	// app.get('/api/student/:id', StudentController.fetchStudent)
	// app.delete('/api/student/:id', StudentController.deleteStudent);
	// app.post('/api/student', StudentController.createStudent);
	// app.put('/api/student/:id', StudentController.editStudent);
