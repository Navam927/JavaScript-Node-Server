import express from 'express';

const app = express();

const port = 7000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}) 

app.get('/', (req, res) => {
    res.send("Hello from server");
})