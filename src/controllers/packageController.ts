import { Request,Response } from "express";
import asyncHandler from 'express-async-handler'
import packageModel from "../models/packageModel";

//@desc Get All Packages
//@route GET /api/package
export const getAllPackages = asyncHandler(async(req:Request,res:Response)=>{
    const packages = await packageModel.find({})
    res.status(200).json(packages)
})

//@desc Get a Package
//@route GET /api/package/:id
export const getSinglePackage = asyncHandler(async(req:Request,res:Response)=>{
    const {id} = req.params
    const result = await packageModel.findById(id)
    res.status(200).json(result)
})

//@desc Create a Package
//@route POST /api/package
export const addPackages = asyncHandler(async(req:Request,res:Response)=>{
    const data = req.body
    const newPackage = new packageModel(data)
    const result = await newPackage.save()
    res.status(201).json(result)
})

//@desc Update a Package
//@route PUT /api/package/:id
export const editPackage = asyncHandler(async(req:Request,res:Response)=>{
    const {id} = req.params
    const changePackage = req.body
    const result = await packageModel.findByIdAndUpdate(id,changePackage)
    res.status(204).json({status:"updated",result})
})

//@desc Delete a Package
//@route DELETE /api/package/:id
export  const deletePackage = asyncHandler(async(req:Request,res:Response)=>{
    const {id} = req.params
    const deletedPackage = await packageModel.findByIdAndDelete(id)
    res.status(204).json(deletedPackage)
})