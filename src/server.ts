import { app } from "./app";
import { database } from '../moongose';
import { config } from "./shared/infrastructure";

database();

app.listen(config.server.port, () =>
  console.log(`Example app listening at http://localhost:${config.server.port}`)
);
