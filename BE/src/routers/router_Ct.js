import express from "express"
import { Allcategory, Create_CT, Remove_CT, Update_CT, getOne_CT } from "../controls/control_Ct";
import { CheckMission } from "../middles/middle";

const routerCt=express.Router();

routerCt.get("/ct",Allcategory);
routerCt.get("/ct/:id",getOne_CT);
routerCt.post("/ct",CheckMission,Create_CT);
routerCt.put("/ct/:id",CheckMission,Update_CT);
routerCt.delete("/ct/:id",CheckMission,Remove_CT);

export default routerCt;