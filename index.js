const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');


const app = express();
app.use(express.json());
app.use(cors());

app.get('/home', (req, res) => {
    res.send("home page");
});

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.akcnxdb.mongodb.net/?retryWrites=true&w=majority');
client.connect();
const db = client.db('cvms');
const col = db.collection('register');


app.post('/insert', async (req, res) => {
    console.log(req.body);
    col.insertOne(req.body);
    res.send("successfully received");
});

app.get('/showall', async (req, res) => {
    const result = await col.find().toArray();
    res.send(result);
});

app.post('/delete', async (req, res) => {
    const result1 = await col.findOne({ 'name': req.body.un });
    console.log(result1);
    if (result1.password == req.body.pw) {
        col.deleteOne(result1);
        console.log("deleted");
    }
});

app.post('/api/donate', async (req, res) => {
    try {
      const newDonation = new Donation(req.body);
      await newDonation.save();
      res.send({ message: 'Donation submitted successfully!' });
      console.log('Donation received:', req.body);
    } catch (error) {
      console.error('Error saving donation:', error);
      res.status(500).send({ message: 'Error: Failed to submit donation.' });
    }
  });

app.post('/check', async (req, res) => {
    const result2 = await col.findOne({ 'name': req.body.un });
    console.log(result2);
    if (result2.password == req.body.pw) {
        res.send(result2);
    } else {
        res.send("failed");
    }
});

app.post('/update', async (req, res) => {
    console.log(req.body);

    const { un, pw, ro, em } = req.body;
    await col.updateOne({ name: un }, {
        $set: {
            password: pw,
            role: ro,
            email: em
        }
    });
});

app.listen(8081);
console.log("server running");
