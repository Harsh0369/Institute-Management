const express = require('express');
const userRoutes = require('./routes/user.routes');
const connect = require('./config/db');

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
connect()

app.listen(3000, () => {
    console.log("server is running on port 3000")
})

module.exports = app;
