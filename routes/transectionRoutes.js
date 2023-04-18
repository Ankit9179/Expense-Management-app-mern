const express = require('express');
const { addTransection, getAllTransection,editTransection,deleteTransection } = require('../controllers/transectionController');


//router object 
const router = express.Router();

//Routes

//add transections
router.post('/add-transection',addTransection);


//edit transections
router.post('/edit-transection',editTransection);

//delete transections
router.post('/delete-transection',deleteTransection);


//get transections
router.post('/get-transection',getAllTransection);

module.exports = router;
