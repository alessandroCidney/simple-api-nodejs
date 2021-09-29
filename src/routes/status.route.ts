// Express
import { Router, Request, Response, NextFunction } from 'express';

// HTTP Status Codes
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status', (
	req: Request, 
	res: Response, 
	next: NextFunction
) => {
	res.status(StatusCodes.OK).send({ status: 'success' });
});

export default statusRoute;