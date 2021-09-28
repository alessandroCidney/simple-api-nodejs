// Express
import express, { Request, Response, NextFunction } from 'express';

// Routes
import usersRoute from './routes/users.route';

const app = express();

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ status: 'success' });
});

app.listen(3000, () => {
	console.log('Server is running at http://localhost:3000');
});