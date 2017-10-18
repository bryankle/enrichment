import axios from 'axios';
import {
	FETCH_ALL_CAMPUS,
	FETCH_CAMPUS,
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
