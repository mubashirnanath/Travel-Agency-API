import { Request,Response } from "express"
import asyncHandler from "express-async-handler"
import destinationModel from "../models/destinationModel"

//@desc Get All Destinations
//@route GET /api/destination
export const getAllDestinations = asyncHandler(async(req:Request,res:Response)=>{
    const destinations  = await destinationModel.find({})
    res.status(200).json(destinations)
})

//@desc Get All Destinations
//@route GET /api/destination
export const getSingleDestination = asyncHandler(async(req:Request,res:Response)=>{
    const {id} = req.params
    const singleDestination = await destinationModel.findById(id)
    res.status(200).json(singleDestination)
})

//@desc Create a Destinations
//@route POST /api/destination
export const addDestination = asyncHandler(async(req:Request,res:Response)=>{
    const {cover_img,location,no_of_packages} = req.body
    if(!cover_img && !location && !no_of_packages){
        throw new Error('All fields required')
    }
    const newDestination = new destinationModel({cover_img,location,no_of_packages})
    const result  = await newDestination.save()
    res.status(201).json(result)
})

//@desc Update a Destinations
//@route PUT /api/destination/:id
export const updateDestination = asyncHandler(async(req:Request,res:Response)=>{
    const {id} = req.params
    const changeDestination = req.body
    await destinationModel.findByIdAndUpdate(id,changeDestination)
    res.json('destionation updated')
})

//@desc Delete a Destinations
//@route DELETE /api/destination/:id
export const deleteDestination = asyncHandler(async(req:Request,res:Response)=>{
    const {id} = req.params
    await destinationModel.findByIdAndDelete(id)
    res.json('destination deleted')
})