import express from 'express';

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
    const greeting = "Hello";
    return res.status(200).json(greeting);
})

app.get("/health", (req, res) => {
    return res.status(400).send('<h1>Piyush</h1>')
} )

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    return res.status(200).json({ message: "Happy", userId})
})

app.get("/search", (req, res) => {
    const {result} = req.query;
    console.log(result);
    return res.status(200).json({message: result})
})

app.listen(PORT, () => {
    console.log(`Server is listen on PORT: ${PORT}`)
})