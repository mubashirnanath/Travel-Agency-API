import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bannerModel from "../models/bannerModel";

//@desc Get All Banners
//@route GET /api/banner
export const getAllBanners = asyncHandler(async (req: Request, res: Response) => {
    const banners = await bannerModel.find({})
    res.status(200).json(banners)
});
  
//@desc Create new Banner
//@route POST /api/banner
export const addBanner = asyncHandler(async (req: Request, res: Response) => {
  const {image,title} = req.body;
  if(!title && !image){
    throw new Error('image or title field missing')
  }
  const newBanner = new bannerModel({image,title});
  const savedBanner = await newBanner.save();
  res.status(201).json(savedBanner);
});

//@desc Delete a Banner
//@route DELETE /api/banner/:id
export const deleteBanner = asyncHandler(async(req:Request,res:Response)=>{
  const bannerId = req.params.id
  const result = await bannerModel.deleteOne({_id:bannerId})
  res.json({text:'Deletion result',result})
})

//@desc Edit a Banner
//@route PUT /api/banner/:id
export const editBanner = asyncHandler(async(req:Request,res:Response)=>{
  const bannerId = req.params.id
  const changedBanner = req.body
  await bannerModel.findByIdAndUpdate(bannerId,changedBanner)
  res.json('Banner updated')
})