const express = require('express');
const { createUser, getUser, loginUser, deleteUser, updateUser } = require('../controllers/user.Controller');
const route = express();

route.get("/", getUser);
route.post("/signup", createUser);
route.post("/login", loginUser);
route.delete("/delete/:id", deleteUser);
route.patch("/update/:id", updateUser);