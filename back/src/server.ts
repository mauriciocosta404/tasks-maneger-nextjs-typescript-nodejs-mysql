import express, { Request,Response,NextFunction } from 'express';
import { usersRoute } from './routes/users.route';
import cors from 'cors';
import { tasksRoute } from './routes/tasks.route';
import { adminRoute } from './routes/admins.route';
import 'express-async-errors';

const app=express();
app.use(cors())
app.use(express.json());

app.use('/users',usersRoute);
app.use('/tasks',tasksRoute);
app.use('/admins',adminRoute);

app.use((error:Error,request:Request, response: Response,next:NextFunction)=> {
    return response.json({
        status:'Error',
        message:error.message,
    })
})

app.listen(3333,()=>{
    console.log(`servidor rodando em http://localhost:${3333}`);
})

