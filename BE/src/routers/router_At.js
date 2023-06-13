import express from "express"
import { AllAuthor, GetOneAuthor, RemoveAuthor, Signin, Signup, UpdateAuthor } from "../controls/control_At";
import { CheckMission } from "../middles/middle";

const routerAt=express.Router();

routerAt.post("/signup",Signup);
routerAt.post("/signin",Signin);
routerAt.get("/allUsers",AllAuthor);

routerAt.get("/oneUser/:id",GetOneAuthor);
routerAt.delete("/removeUser/:id",CheckMission,RemoveAuthor);
routerAt.put("/updateUser/:id",CheckMission,UpdateAuthor);

export default routerAt;