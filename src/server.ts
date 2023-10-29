import express, { Express, Request, Response } from 'express';
import router from './routes/MPLListRoutes';
const app: Express = express()
app.use(express.json());

app.use("/api/v1", router)


app.listen(5000)
