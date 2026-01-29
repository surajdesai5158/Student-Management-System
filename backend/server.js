import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import UserRouter from './routes/UserRouter.js';
import router from './routes/CourseRoutes.js';
import resultrouter from './routes/ResultRoutes.js';
import contactrouter from './routes/ContactRoutes.js';
import path from 'path';
import facultyrouter from './routes/FacultyRoutes.js';
import studentrouter from './routes/StudentReportroutes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT||7000;
const URL = process.env.MONGOURL;
app.use("/", UserRouter)
app.use("/admin",router );
app.use("/user",router );
app.use("/api", facultyrouter);

app.use("/spi", studentrouter);


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/admin/results", resultrouter);
app.use("/admin/dashboard", resultrouter);
app.use("/admin/set", resultrouter);
app.use("/user/results", resultrouter);

app.use("/admin",contactrouter);




mongoose.connect(URL).then(()=>{
    console.log("DB is connected successfully");
    app.listen(PORT,()=>{
        console.log("Server is running on port:"+PORT);
    })

}).catch(error=>console.log(error));


