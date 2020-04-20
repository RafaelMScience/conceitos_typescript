import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "Rafael@gmail.com",
    password: "122345",
    techs: ["Nodejs", "React", { title: "Javascript", exp: 100 }],
  });

  return res.json("Hello World");
}
