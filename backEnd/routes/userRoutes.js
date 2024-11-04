const express = require('express');
const User = require('../models/User');
const router = express.Router();
// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", newUser });
      } catch (err) {
        res.status(500).json({ error: "Failed to create user" });
      }
 res.json({ message: 'Signup successful' });
});
// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
      } catch (err) {
        res.status(500).json({ error: "Failed to create user" });
      }
 if (user) {
 res.json({ message: 'Login successful' });
 } else {
 res.status(300).json({ message: 'Invalid credentials' });
 }
});
module.exports = router;