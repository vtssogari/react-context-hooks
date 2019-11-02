import { Response, Request, NextFunction } from "express";

/**
 * GET /cv/forbidden
 */
export const forbiddenController = (req: Request, res: Response) => {
    res.send('Error: User is not authorized.');
};