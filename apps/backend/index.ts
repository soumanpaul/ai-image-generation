import express from 'express'

const PORT = process.env.PORT || 8080;

const app = express();


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/ai/traning", (req, res) => {
    res.send("AI training");
})

app.post("/ai/generate", (req, res) => {
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
