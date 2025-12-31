// import express from 'express'
// import getStudents from '../controller/studentController.js'

// const router =express.Router()
// router.get('/get-student',getStudents)
// route.post('/add-student',addStudents)

// export default router;

import express from 'express';
const router = express.Router();
import {getStudentsDetails,addStudents,getStudentId} from '../controller/studentController.js';

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);
router.get('/get-student/:userid', getStudentId);
export default router;