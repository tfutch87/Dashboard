const express = require('express')
const { getPosts, createPost,  createProject, createEmployee, getEmployee, getProjects, getCustomer }  = require('../controllers/post')


const router = express.Router();

router.get('/', getPosts)
router.post('/db', createPost)
router.post('/projects', createProject)
router.post('/createEmployee', createEmployee)
router.get('/employees', getEmployee)
router.get('/projects', getProjects)
router.get('/customers', getCustomer)

module.exports = router;