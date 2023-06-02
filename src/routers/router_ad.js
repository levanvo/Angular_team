import express from "express";
import { Signin, Signup } from "../controllers/control_ad";

const routerAd=express.Router();

routerAd.post("/sigup",Signup);
routerAd.post("/sigin",Signin);

export default routerAd;