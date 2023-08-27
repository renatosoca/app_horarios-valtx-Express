import { app } from "./app";
import { database } from '../moongose';
import 'dotenv/config';

database();

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
