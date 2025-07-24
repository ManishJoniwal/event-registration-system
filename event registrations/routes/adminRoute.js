const express = require("express");
const router = express.Router();
const authenticateAdmin = require("../middlewares/authMiddleware")
const { registerAdmin, loginAdmin, getSingleUser, getAllusers } = require("../controllers/adminController");

//register admin
router.post('/register', registerAdmin)
// login admin
router.post('/login', loginAdmin);
// Get all users
router.get('/users', authenticateAdmin, getAllusers);
// Get single user 
router.get('/user/:id', authenticateAdmin, getSingleUser);

module.exports = router;