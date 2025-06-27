import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/";

app.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
});

app.get("/Any", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/Any");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/Programming", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/Programming");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/Dark", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/Dark");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/Spooky", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/Spooky");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/Christmas", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/Christmas");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/Misc", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/Misc");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/Pun", async (req, res) => {
    try {
      const result = await axios.get(API_URL + "/Pun");
      res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  