import express from "express"
import { Create, Remove, Update, getAll, getAllLimit, getOne } from "../controls/constrol_Pr";
import { CheckMission } from "../middles/middle";

const routerPr=express.Router();

routerPr.get("/prlimit",getAllLimit);
routerPr.get("/pr",getAll);
routerPr.get("/pr/:id",getOne);
routerPr.post("/pr",CheckMission,Create);
routerPr.put("/pr/:id",CheckMission,Update);
routerPr.delete("/pr/:id",CheckMission,Remove);

export default routerPr;