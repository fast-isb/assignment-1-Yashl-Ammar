import  express  from "express";

const workerRouter = express.Router();

workerRouter.post('/add',( req, res) => {
    console.log(req.body);
})

export default workerRouter;