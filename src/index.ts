// Express
import express, { Request, Response, NextFunction } from 'express';

// HTTP Status Codes
import { StatusCodes } from 'http-status-codes';

// Routes
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

// Configurando a interpretação de JSON e de itens das URLs (query strings, etc.)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);
app.use(statusRoute);

app.listen(3000, () => {
	console.log('Server is running at http://localhost:3000');
});