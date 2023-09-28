import jwt from "jsonwebtoken";
import { exports } from "../config/default.js";

export const generateToken = (data) => {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000 + (30*30)),
        data: data
      },  exports.secret);
}