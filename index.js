import dotenv from 'dotenv';
import express from 'express';


dotenv.config();

const PORT = process.env.PORT;
const app = express();

// handlers
const handleRoot = (req, res) => {
    res.send("Root");
}

const handleHelloWorld = (req, res) => {
    res.send("Hello, World!");
}

const handleGetUser = (req, res) => {
    return res.send("Received GET request for User.");
}

const handlePostUser = (req, res) => {
    return res.send("Received POST request for User.");
}

const handlePutUser = (req, res) => {
    return res.send(`Received PUT request for User ${req.params.userId}.`);
}

const handleDeleteUser = (req, res) => {
    return res.send("Received DELETE request for User.");
}

// routes
app.get('/', handleRoot);
app.get('/hello', handleHelloWorld);

app.get('/users/:user/:userId', (req, res) => {res.send(req.params)});
app.get('/users', handleGetUser);
app.post('/users', handlePostUser);
app.put('/users/:userId', handlePutUser);
app.delete('/users', handleDeleteUser);


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}...`);
});
