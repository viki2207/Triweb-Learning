import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/error";
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  //jwt using sign secretmyverysecretkey

  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const err = new ProjectError("Not authenticated");
      err.statuscode = 401;
      throw err;
      res.status(401).send("Not Authenticated");
    } else {
      const token = authHeader.split(" ")[1];

      let decodeToken: { userId: String; iat: Number; exp: Number };
      try {
        decodeToken = <any>jwt.verify(token, "secretmyverysecretkey");
        console.log(decodeToken);
        if (!decodeToken) {
          const err = new ProjectError("Not authenticated");
          err.statuscode = 401;
          throw err;
        } else {
          req.userId = decodeToken.userId;
        }
      } catch (error) {
        const err = new ProjectError("Not authenticated");
        err.statuscode = 401;
        throw err;
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};
export { isAuthenticated };
