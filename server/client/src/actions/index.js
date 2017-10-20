import axios from 'axios';
import {
	FETCH_ALL_CAMPUS,
	FETCH_CAMPUS,
	ADD_STUDENT,
	REMOVE_STUDENT,
	CREATE_CAMPUS, 
	DELETE_CAMPUS, 
	FETCH_ALL_STUDENTS,
	FETCH_STUDENT,
	DELETE_STUDENT,
	CREATE_STUDENT,
	EDIT_STUDENT
} from './types';

const ROOT_URL = 'http://localhost:3001';

// Campus Actions
export const fetchAllCampus = () => {
	return dispatch => {
		axios.get(`${ROOT_URL}/api/campus`)
			.then(res => {
				dispatch({
					type: FETCH_ALL_CAMPUS,
					payload: res.data
				})
			})
	}
}

export const fetchCampus = id => {
	return dispatch => {
		axios.get(`${ROOT_URL}/api/campus/${id}`)
			.then(res => {
				dispatch({
					type: FETCH_CAMPUS,
					payload: res.data
				})
			})
	}
}

export const createCampus = (name, picture) => {
	return dispatch => {
		axios.post(`${ROOT_URL}/api/campus`, { name, picture })
			.then(res => {
				dispatch({
					type: CREATE_CAMPUS,
					payload: res.data
				})
			})
	}
}

export const deleteCampus = id => {
	return dispatch => {
		axios.delete(`${ROOT_URL}/api/campus/delete/${id}`) 
			.then(res => {
				dispatch({
					type: DELETE_CAMPUS,
					payload: id
				})
			})
	}
}

export const removeStudent = id => {
	return dispatch => {
		axios.put(`${ROOT_URL}/api/campus/remove/${id}`)
			.then(res => {
				dispatch({
					type: REMOVE_STUDENT,
					payload: res.data
				})
			})
	}
}

export const addStudent = (campusId, studentId, allStudents) => {
	return dispatch => {
		axios.put(`${ROOT_URL}/api/campus/${campusId}/add/${studentId}`)
			.then(res => {
				dispatch({
					type: ADD_STUDENT,
					payload: {
						studentId: res.data,
						allStudents
					}
				})
			})
	}
}

// Student Actions

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

export const fetchStudent = id => {
	return dispatch => {
		axios.get(`${ROOT_URL}/api/student/${id}`)
			.then(res => {
				dispatch({
					type: FETCH_STUDENT,
					payload: res.data
				})
			})
	}
}

export const createStudent = (name, email) => {
	return dispatch => {
		axios.post('/api/student', { name, email })
			.then(res => {
				dispatch({
					type: CREATE_STUDENT,
					payload: res.data
				})
			})
	}
}

export const deleteStudent = id => {
	return dispatch => {
		axios.delete(`${ROOT_URL}/api/student/${id}`)
			.then(res => {
				dispatch({
					type: DELETE_STUDENT,
					payload: id
				})
			})
	}
}

export const editStudent = (studentId, name, email, campusId, campusName) => {
	return dispatch => {
		axios.put(`${ROOT_URL}/api/student/${studentId}`, { name, email, campusId, campusName })
			.then(res => {
				dispatch({
					type: EDIT_STUDENT,
					payload: res.data
				})
			})
	}
}