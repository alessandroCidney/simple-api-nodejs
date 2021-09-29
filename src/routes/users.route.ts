// Express
import { Router, Request, Response, NextFunction } from 'express';

// HTTP Status Codes
import { StatusCodes } from 'http-status-codes';

const usersRoute = new Router();

usersRoute.get('/users', (
	req: Request, 
	res: Response, 
	next: NextFunction
) => {
	const users = [
		{
			username: 'Johnson'
		}
	];

	res.status(StatusCodes.OK).send({ users });
});

usersRoute.get('/users/:uuid', (
	req: Request<{uuid: string}>, 
	res: Response, 
	next: NextFunction
) => {
	const uuid = req.params.uuid;

	res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (
	req: Request, 
	res: Response, 
	next: NextFunction
) => {
	const newUser = req.body;

	res.status(StatusCodes.CREATED).send(newUser);
});

usersRoute.put('/users/:uuid', (
	req: Request<{uuid: string}>, 
	res: Response, 
	next: NextFunction
) => {
	const uuid = req.params.uuid;

	const newUser = req.body;
	newUser.uuid = uuid;

	res.status(StatusCodes.OK).send(newUser);
});

export default usersRoute;