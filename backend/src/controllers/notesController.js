import note from"../models/note.js"
export async function getAllNotes(req,res){
try{
    const notes= await note.find().sort({createAt:-1})  // (-1 will sort in desc order  newest first)
        res.status(200).send("you got 40 notes");

}catch(error){
    console.error("error in getAllNotes controller")
res.status(500).json({message:"internal server error",error})
}
 }



export async function getNoteById(req,res){
try{
    const notes= await note.findById(req.params.id)
        res.status(200).send("you got 40 notes");

}catch(error){
    console.error("error in getAllNotes controller")
res.status(500).json({message:"internal server error",error})
}
 }

  export async function createNote(req,res){
    try{
        const {title,content}=req.body
        const newNote=new note({title,content})
        await newNote.save()
        res.status(201).json
        console.log(title,content)

    }catch(error){
 console.error("error in createNote controller")
res.status(500).json({message:"internal server error",error})
    }

 }

 export async function updateNote(req,res){
   try{
        const {title,content}=req.body
      const updatedNote=  await note.findByIdAndUpdate(req.params.id,{title,content})
     if(!updatedNote) return res.status(404).json(message,"note not found")
      res.status(200).json({message:"note updated successfully"})
   }catch(error){
 console.error("error in updateNote controller")
res.status(500).json({message:"internal server error",error})
   }
}

 export async function deleteNote(req,res){
    try{
             const {title,content}=req.body
         const deletedNote=    await note.findByIdAndDelete(req.params.id,{title,content})
          if(!deletedNote) return res.status(404).json(message,"note not found")

         res.status(200).json({message:"note deleted successfully"})

    }catch(error){
 console.error("error in deleteNote controller")
res.status(500).json({message:"internal server error",error})
    }
 
}

