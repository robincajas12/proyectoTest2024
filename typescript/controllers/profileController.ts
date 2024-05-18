import express from 'express';
import { Request, Response } from "express";

const profileRouter =  express.Router();
profileRouter.route('/').get(getProfile);

function getProfile(req: Request, res: Response) {
    res.render('');
}

export default profileRouter;