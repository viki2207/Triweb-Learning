import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  //jwt using sign secretmyverysecretkey

  const authHeader = req.get("Authorization");

  if (!authHeader) {
    const err = new Error("Not authenticated");
    res.status(401).send("Not Authenticated");
  } else {
    const token = authHeader.split(" ")[1];

    let decodeToken: { userId: String; iat: Number; exp: Number };
    try {
      decodeToken = <any>jwt.verify(token, "secretmyverysecretkey");
      console.log(decodeToken);
      if (!decodeToken) {
        const err = new Error("Not authenticated");
        throw err;
      } else {
        req.userId = decodeToken.userId;
      }
    } catch (error) {
      console.log(error);
      res.send("here at decode jwt in auth");
    }
  }

  next();
};
export { isAuthenticated };
