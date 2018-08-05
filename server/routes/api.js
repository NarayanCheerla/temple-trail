const express = require('express');
const router = express.Router();

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

router.get('/', (req, res) => {
    res.json(response);
});

module.exports = router;