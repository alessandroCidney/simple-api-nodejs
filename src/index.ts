// Express
import express, { Request, Response, NextFunction } from 'express';

// HTTP Status Codes
import { StatusCodes } from 'http-status-codes';

// Routes
import usersRoute from './routes/users.route';

const app = express();

app.use(express.json());

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.status(StatusCodes.OK).send({ status: 'success' });
});

app.listen(3000, () => {
	console.log('Server is running at http://localhost:3000');
});