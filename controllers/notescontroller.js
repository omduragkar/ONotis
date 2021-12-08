const expressAsyncHandler = require("express-async-handler");
const Note = require("../models/notes");
const User = require("../models/user");

module.exports.getNotes = expressAsyncHandler(async (req, res)=>{
    try {
        const notes= await Note.find({user:req.user._id});
        res.json(notes);
    } catch (err) {
        res.status(400);
        throw new Error(`Server Error in making Notes :-( ${err.message}`);        
    }
} )



module.exports.addNotes = expressAsyncHandler(async (req, res)=>{
    const {title, category, content } = req.body;
    try {
        
        let notes = await Note.create({
            title,
            category,
            content,
            user:req.user._id
        })
        res.status(200);
        res.json(notes);

    } catch (err) {
        res.status(400);
        throw new Error(`Server Error in making Notes :-( ${err.message}`);
    }
    
} )


module.exports.getOneNote = expressAsyncHandler(async (req, res)=>{
    try {
        const notes= await Note.findOne({_id:req.params.id});
        console.log(notes.user.toString())
        console.log(req.user._id)
        // console.log(notes.user.toString().equals(req.user._id))
        // console.log(notes.user.toString() === (req.user._id))
        // console.log(notes.user.toString() == (req.user._id))
        if(notes.user.toString() == (req.user._id))
        {
            res.json(notes);
        }
        else{
            res.status(400);
            throw new Error(`Not Authorized in Gettting Notes :-( ${err.message}`);
        }
    } catch (err) {
        res.status(400);
        throw new Error(`Server Error in getting Notes :-( ${err.message}`);

    }

})



module.exports.createOneNote = expressAsyncHandler(async (req, res)=>{
    
    const {title, content, category} = req.body;
    try {
        let note = await Note.findOne({_id:req.params.id});

        if( note.user.toString() != (req.user._id))
        {
            res.status(400);
            throw new Error(`Not Authorized to update Notes :-( ${err.message}`);

        }
        else{

            if(title)
            {
                note.title = title;
            }
            if(content)
            {
                note.content = content;
            }
            if(category)
            {
                note.category = category;
            }
            const updateNote = await Note.save();
            res.json(updateNote);
        }   
        
    } catch (err) {
        req.status(400);
        throw new Error(`ERROR: Not able to update: ${err}`)

    }
});


module.exports.updateNotes = expressAsyncHandler(async (req, res)=>{
    try {
        let note = await Note.findOne({_id:req.params.id});
        
        if(note.user.toString() == req.user._id)
        {
            try {
                await Note.deleteOne({_id:note._id});
                res.json({
                    "message":"Note Removed!"
                });
                
            } catch (err) {
                res.status(401);
                throw new Error("No such Note Exists!");
            }
        }
        else if(note){
            res.status(401);
            throw new Error("You can't Perform This actions!");
        }
    } catch (err) {
        res.status(404);
        throw new Error("Note Not found!");
        
    }
});
