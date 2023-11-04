import express,{Application,Request,Response} from 'express';
import { config } from 'dotenv';
import { dbConnection } from './config/databaseConnection';
import userRouter from './routes/userRoute';
import todoRouter from './routes/todoRoute';
import notFound from './middleware/notFound';

config()

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

dbConnection();

app.get('/', (req:Request, res:Response) => {
    res.send('Api is running')
})

app.use("/api/v1/users", userRouter);

app.use("/api/v1/todos", todoRouter);

app.use(notFound);

app.listen(port,()=>{
    console.log(`typeScript server is listening on port ${port}`);
});


