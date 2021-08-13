const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CarModel = require("./models/Car");

const db = "mongodb://localhost/car-example";

const PORT = process.env.port || 3009;

mongoose.connect(db);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("api running");
});

app.get("/car", async (req, res) => {
  try {
    const name = req.query.name;
    const cars = await CarModel.find({ name: name });
    res.send(cars);
  } catch (error) {
    console.log(error);
    res.send("server error");
  }
});

app.put("/car/:id", async (req, res) => {
  try {
    const carToUpdate = await CarModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: { name: req.body.name },
      },
      { new: true }
    );
    res.send(carToUpdate);
  } catch (error) {
    console.log(error);
    res.send("server error");
  }
});

app.post("/car", async (req, res) => {
  const car = new CarModel();
  car.name = req.body.name;
  car.manufacture = req.body.manufacture;
  car.price = req.body.price;
  try {
    await car.save();
    console.log("success");
    res.send(car);
  } catch (error) {
    console.log(error.message);
    res.send("server error");
  }
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));
