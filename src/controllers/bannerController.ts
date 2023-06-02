import { Request,Response } from "express";
import asyncHandler from "express-async-handler";
import bannerModel from "../models/bannerModel";

//@desc Get user details
  //@route GET /api/user/:id
  //@access private


    export const getAllBanners=asyncHandler(async(req:Request,res:Response)=>{})
    export const addBanner=asyncHandler(async(req:Request,res:Response)=>{
        const newData = req.body
        console.log(newData);
        
        const newBanner = new bannerModel(newData)
        const savedBanner = await newBanner.save()
        res.status(201).json({status:'banner saved',savedBanner})
    })
