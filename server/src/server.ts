import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json({msg: "Hello World!s"});
})

app.listen(3333);