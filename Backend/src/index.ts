import express,{Application,Request,Response} from 'express';
import { config } from 'dotenv';
import { dbConnection } from './config/databaseConnection';

config()

const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

dbConnection();

app.get('/', (req:Request, res:Response) => {
    res.send('Api is running')
})

app.listen(port,()=>{
    console.log(`typeScript server is listening on port ${port}`);
});


