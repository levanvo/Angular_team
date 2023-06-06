import express from "express"
import { AllAuthor, Signin, Signup } from "../controls/control_At";

const routerAt=express.Router();

routerAt.post("/signup",Signup);
routerAt.post("/signin",Signin);
routerAt.get("/allUsers",AllAuthor);

export default routerAt;