const express = require('express');
const { createUser, getUser, loginUser, deleteUser } = require('../controllers/user.Controller');

const router = express.Router();

router.get("/", getUser);
router.post("/signup", createUser);
router.post("/login", loginUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
