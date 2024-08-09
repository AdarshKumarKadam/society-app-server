const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const routes = require("./routes/indexRouter");

const createApp = () => {
  const app = express();

  app.use(express.json());
  
  //middleware to parse body
  app.use(bodyParser.json());

  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["POST", "PATCH", "GET", "DELETE"],
      credentials: true,
    })
  );

  app.use(routes);

  app.use(errorHandler);
  return app;
};

module.exports = createApp;
