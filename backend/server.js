import path from 'path'
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
// import connectDB from './config/db.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import authRoutes from './routes/authRoutes.js';

// parsing .env file
dotenv.config();

// creating server instance
const app = express();

//connect to database
// connectDB();

app.use(express.json()); // parsing body
app.use('/api', cors()); // Enabling CORS for all /api routes
app.use(cookieParser()); // parsing cookies
// app.use(require('./router'));    // Registering all app-routers here



app.use('/api/auth', authRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));