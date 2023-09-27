//rederiect request to particular method on controller
import express from "express";

import { registerUser, loginUser, isUserExist } from "../controllers/auth";
import { body } from "express-validator";

const router = express.Router();
router.post(
  "/",
  [
    body("name")
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 4 })
      .withMessage("Please enter a valid name ,minimum 4 char long"),
    body("email")
      .trim()
      .isEmail()
      .custom((emailId: String) => {
        return isUserExist(emailId)
          .then((status: Boolean) => {
            if (status) {
              return Promise.reject("user already exists");
            }
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 8 })
      .withMessage("Enter atlist 8 char long password"),
    body("confirm_password")
      .trim()
      .custom((value: string, { req }) => {
        if (value != req.body.password) {
          return Promise.reject("password mismatched");
        }
        return true;
        //console.log(req.body);
      }),
  ],
  registerUser
);

//login
router.post("/login", loginUser);
export default router;
