
const transectionModel = require('../models/transectionModel');

//find all transections and display
const getAllTransection = async (req,res) =>{
    try {
        const transections = await transectionModel.find({
            userid:req.body.userid
        })
        
        res.status(200).json(transections)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
};

//delete transection from database
const deleteTransection = async (req,res) =>{
    try {
        await transectionModel.findOneAndDelete({_id:req.body.transectioId})  //read again and again
        res.status(200).json('Transection deleted successfully') 
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}



//edit transection in database and your screen also
const editTransection = async (req,res) =>{
    try {
        await transectionModel.findOneAndUpdate({_id:req.body.transectioId},req.body.payload)  //edit treansection controller (1,2) 1.parametear is kiste bassis pe and 2.change
        res.status(200).json('Edit successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

//create transections in database
const addTransection = async (req,res) =>{
    try {
        const newTransection = new transectionModel(req.body)
        await newTransection.save()  ////read again and again
        res.status(201).send("transection created")
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
};

module.exports = {getAllTransection,addTransection,editTransection,deleteTransection};