const router = require('express').Router();

router.get('/health', (req, res) => {
    // throw new Error('Error');
    res.status(200).json({ message: 'Hello' });
});

module.exports = router;