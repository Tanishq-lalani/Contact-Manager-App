const asynchandler = require('express-async-handler')
const Contact = require('../models/contactModel')


//Private Route
// api/contact/
const getAllContacts = asynchandler(async (req,res) =>{
    const contacts = await Contact.find({user_id: req.user.id})
    res.status(200).json(contacts)
})

// Private Route
// api/contact/create
const createContact = asynchandler(async (req,res) =>{
    const {name, email, phoneNo} = req.body;
    if(!name || !email || !phoneNo){
       return res.status(400).json({message: "Invalid Details"})
    }
    const contacts = await Contact.create({
        name,
        email,
        phoneNo,
        user_id: req.user.id,
    })
    return res.status(200).json({contacts})
})


// Private Route
// api/contact/:id
const updateContact = asynchandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
       return res.status(400).json({message: "contact not Found"})
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    return  res.status(200).json(updatedContact)
})


// Private Route 
// api/contact/:id
const getContact = asynchandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id)

    if(contact.user_id.toString() !== req.user.id){
      return  res.status(403).json({message: "Contact Not Granted"})
    }

    return res.status(200).json(contact)
})


// Private Route
// api/contact/:id
const deleteContact = asynchandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id)

    if(contact.user_id.toString() !== req.user.id){
       return res.status(403).json({message: "Contact Not Granted"})
    }
    const deletedContact = await Contact.findByIdAndDelete(req.params.id)
    return res.status(200).json(deletedContact)
})


module.exports = {getAllContacts,createContact,getContact,updateContact,deleteContact}
