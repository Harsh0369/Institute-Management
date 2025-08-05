import express from 'express';
import userRoutes from './routes/user.routes.js';
import { connect } from './config/db.js';

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
connect()

app.listen(3000, () => {
    console.log("server is running on port 3000")
})

export default app;
