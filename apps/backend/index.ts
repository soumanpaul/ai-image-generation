import express from 'express'
import { TrainModel, GenerateImageFromPrompt, GenerateImage, } from 'common/types'
import { prismaClient } from 'db';

const USER_ID = "1234";

const PORT = process.env.PORT || 8080;


const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/ai/traning", async (req, res) => {
    const parsedBody = TrainModel.safeParse(req.body);

    if(!parsedBody.success) {
        res.status(411).json({
            message: "Input Incorrect"
        })
        return
    }
const data =  await prismaClient.model.create({
    data: {
        name: req.body.name,
        type: req.body.type,
        age: req.body.age,  
        ethinicity: req.body.ethinicity,
        eyeColor: req.body.eyeColor,
        bald: req.body.bald,
        userId: USER_ID,
    } //as ModelCreateInput // Add the type assertion here
})
   res.json({
    modelId: data.id
   })
})

app.post("/ai/generate", (req, res) => {
    const parsedBody = GenerateImage.safeParse(req.body);

    if(!parsedBody.success) {
        res.status(411).json({
            message: "Input Incorrect"
        })
        return
    }
    res.send("AI generate");
})

app.post("/pack/generate", (req, res) => {
    res.send("AI generate");
})

app.post("/pack/bulk", (req, res) => {
    res.send("AI bulk");
})

app.post("/image", (req, res) => {
    res.send("AI image");
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
