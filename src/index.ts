import express, { Request, Response } from "express";
const app = express();

app.post("/repo-url", (req: Request,res: Response) => {
    const {repoUrl} = req.body;
    

})