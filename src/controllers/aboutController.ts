import { Request,Response } from "express";
import asyncHandler from 'express-async-handler'
import aboutModel from "../models/aboutModel";

//@desc Get About Data
//@route GET /api/about/
export const getAbout = asyncHandler(async(req:Request,res:Response)=>{
    const data = await aboutModel.find({})
    res.status(200).json(data)
})

//@desc Create About Data
//@route POST /api/about/
export const addAbout = asyncHandler(async(req:Request,res:Response)=>{
    const {title,description,image} = req.body
    if(!title && !description && !image){
        throw new Error('fields are incomplete')
    }
    const newAbout = new aboutModel({title,description,image})
    const savedAbout = await newAbout.save()
    res.status(201).json(savedAbout)
})

//@desc Edit About Data
//@route PUT /api/about/:id
export const editAbout = asyncHandler(async(req:Request,res:Response)=>{
    const aboutId = req.params.id
    const changedAbout = req.body
    await aboutModel.findByIdAndUpdate(aboutId,changedAbout)
    res.json('about updated')
})

//@desc Delete About Data
//@route DELETE /api/about/:id
export const deleteAbout = asyncHandler(async(req:Request,res:Response)=>{
    const aboutId = req.params.id
    const deletedAbout = await aboutModel.findByIdAndDelete(aboutId)
    res.json({result:'Deletion result',deletedAbout})
})