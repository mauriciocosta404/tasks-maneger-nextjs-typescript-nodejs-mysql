import { Router } from "express";
import { createUserController } from "../useCases";

const router=Router();

router.get('/',(request,response)=>{
    return response.json({message:'kkkn hjj'});
})
router.post('/',(request,response)=>{
    createUserController.handle(request,response);  
});

export {router};