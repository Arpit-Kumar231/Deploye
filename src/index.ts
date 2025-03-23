import express, { Request, Response } from "express";
import { generate } from "./helper/functions";
import cors from "cors";
import simpleGit from "simple-git";
const app = express();
app.use(cors());
app.use(express.json());

app.post("/repo-url", async (req: Request, res: Response) => {
  const { repoUrl } = req.body;
  const session = generate();
  await simpleGit().clone(repoUrl, `./output/${session}`);
  res.json({
    id: session,
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
