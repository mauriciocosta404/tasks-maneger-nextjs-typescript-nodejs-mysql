import { Router } from "express";
import { createUserController } from "../useCases";
import { getUsersController } from "../useCases/getUsers";

const router=Router();

router.get('/',(request,response)=>{

    const users=getUsersController.handleUsers(request,response);

    return response.json(users);
})
router.post('/',(request,response)=>{
    createUserController.handle(request,response);  
});

export {router};