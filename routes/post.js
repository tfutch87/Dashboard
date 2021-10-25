const express = require('express')
const { getPosts, createProject, createEmployee, getEmployee, getProjects, getCustomer, Delete, homePage, newUser }  = require('../controllers/post')


const router = express.Router();


router.get('/', homePage)
router.post('/login', newUser)
router.get('/home', getPosts)
router.post('/delete', Delete)
router.post('/projects', createProject)
router.post('/createEmployee', createEmployee)
router.post('/delete', createEmployee)
router.get('/employees', getEmployee)
router.get('/projects', getProjects)
router.get('/customers', getCustomer)

module.exports = router;