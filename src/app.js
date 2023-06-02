import express from "express";
import mongoose  from "mongoose";
import routerAd from "./routers/router_ad";

const app=express();
app.use(express.json());

app.use(routerAd);

mongoose.connect("mongodb://127.0.0.1:27017/account");
export const Vole=app;