import { Request, Response } from "express";
import express from 'express';
const homeRouter =  express.Router();

homeRouter.route('/')
    .get(getHome)
    .post(postHome);



function postHome(req : Request, res: Response) : void
{
    res.redirect('/test');
}

function getHome (req : Request, res: Response) : void
{
    res.render('index', {stylesheet:'main'});
}

export default homeRouter;  