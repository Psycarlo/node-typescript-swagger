import express from "express";
import cors from "cors";
import app from "./app";
import router from "./router";
import fs from "fs";

import { RegisterRoutes } from "./controllers/routes";

import swaggerUi from "swagger-ui-express";

const port = 8081;
const swaggerDoc = JSON.parse(fs.readFileSync("./src/swagger.json", "utf-8"));

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// RegisterRoutes(app); # Crashes

app.listen(port, () => {
  console.log(`Listening at ${port}...`);
});

module.exports = app;
