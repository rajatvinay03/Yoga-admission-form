const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/enroll', async (req, res) => {
  try {

    // Validation
    // console.log(req.body.name,req.body.age,req.body.selectedBatch);
    
    if (!req.body.name || !req.body.age || !req.body.selectedBatch) {
      return res.status(400).json({ message: 'Name, age, and selectedBatch are required.' });
    }

    // TODO: Mock payment function
    
    if (true) {
      const user = new User({
        name: req.body.name,
        age: req.body.age,
        selectedBatch: req.body.selectedBatch,
      });
      await user.save();
      return res.status(200).json({ message: 'Enrollment successful!' });
    } else {
      return res.status(500).json({ message: 'Payment failed. Please try again.' });
    }
  } catch (error) {
    console.error('Error enrolling:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
