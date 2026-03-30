const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // This allows your frontend to talk to this server
app.use('/api/auth', require('./routes/authRoutes'));