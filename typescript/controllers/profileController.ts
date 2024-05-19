import express from 'express';
import { Request, Response } from "express";
import User from '../models/userInfoModel.js';
const profileRouter =  express.Router();
profileRouter.route('/profile').get(getProfile);

function getProfile(req: Request, res: Response) {
    res.render('pages/profile/userProfile',  
    {
        stylesheet: 'profile', 
        user : new User('unknown', {country:'EC', gender: 'Masculine'}, 'admin')
    });
}

export default profileRouter;