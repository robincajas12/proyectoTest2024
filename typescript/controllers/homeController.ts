import { Request, Response } from "express";
import express from 'express';
const homeRouter =  express.Router();
import {Search, GetResources, GetNewEpisodes} from "@carlosnunezmx/animeflv";
homeRouter.route('/')
    .get(getHome)
    .post(postHome);



function postHome(req : Request, res: Response) : void
{
    res.redirect('/test');
}

function getHome (req : Request, res: Response) : void
{
    GetNewEpisodes(null).then(data=> GetResources(data[0].Id)).then(data => res.render('index', {stylesheet:'main', episodes:  data || [{
        server: 'stape',
        title: 'Stape',
        ads: 1,
        url: 'https://streamtape.com/v/Ly0BbAR3eVSbLj/',
        allow_mobile: true,
        code: 'https://streamtape.com/e/Ly0BbAR3eVSbLj/'
      }
    ]}))
}

export default homeRouter;  