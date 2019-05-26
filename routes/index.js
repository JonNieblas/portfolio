var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/indexController');
var projects_controller = require('../controllers/projectsController');

/* GET home page. */
router.get('/', index_controller.index);

/* GET projects page. */
router.get('/projects', projects_controller.index);

module.exports = router;
