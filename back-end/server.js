import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import routes from "./routes/routes.js";

const PORT = 8888;
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/airbnb", {
  keepAlive: true,
  keepAliveInitialDelay: 300000,
  useNewUrlParser: true,
  useUnifiedTopology: tru,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({ secret:'Shh, its a secret!', store: new MongoStore(options) },)
);

routes(app);

app.use(express.static('public'));

app.get('/', (req, res) =
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
