import express from "express"
const router =express();

router.get("/",(req,res)=>{
    res.status(200).send("you got 40 notes")
});

router.post("/",(req,res)=>{
    res.status(201).json({
        message:"note created successfully"
    });
});

router.put("/",(req,res)=>{
    res.status(200).json({
        message:"note updated successfully"
    });
});

router.delete("/",(req,res)=>{
    res.status(200).json({
        message:"note deleted successfully"
    });
});
export default router;