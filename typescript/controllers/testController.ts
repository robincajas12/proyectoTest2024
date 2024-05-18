import { Request, Response } from "express";
import questions from "../models/QuestionsModel.js";
import express from 'express';
const testRouter =  express.Router();

testRouter.route('/test')
    .get(getTest);


function getTest(req: Request, res:Response) : void {
    res.render('pages/test', {
        questions: questions,
        stylesheet:  'test'
    });
}

export default testRouter;