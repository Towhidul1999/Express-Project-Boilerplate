const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const midleware = [morgan('dev'), cors(), express.json()];

module.exports = midleware;