const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoute = require('./routes/AuthRoute');

require('dotenv').config();

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3003;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
// app.use(bodyParser.json());

app.use(
    cors({
        origin: "http://localhost:3003",
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser())
app.use(express.json());
app.use('/', authRoute);

app.get('/allHold', async(req,res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
})

app.get('/allPos', async(req,res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
})

app.post('/newOrder', async (req, res) => {
    try {
        const { name, qty, price, mode } = req.body;
        if (!name || !qty || !price || !mode) {
            return res.status(400).send("Missing required fields");
        }
        const newOrder = new OrdersModel({ name, qty, price, mode });
        await newOrder.save();
        res.send('Order Saved!');
    } catch (error) {
        console.error("Error saving order:", error);
        res.status(500).send("Error saving order");
    }
});

app.get('/allOrders', async (req, res) => {
    try {
        const allOrders = await OrdersModel.find({});
        res.json(allOrders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).send("Error fetching orders");
    }
});


app.listen(PORT, ()=>{
    console.log("App started");
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => { console.log("Database Connected!!") })
    .catch(error => console.log("Error connecting to database: ", error)) 
})