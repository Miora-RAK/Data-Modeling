import { MongoClient } from "mongodb";
import { showCollections } from "./showCollections";
// import { insertOneMovie } from "./insertOneMovie";
// import { insertManyMovies } from "./insertManyMovies";
// import { createMoviesCollection } from "./createMoviesCollection";
// import { insertManyGenre } from "./insertManyGenre";
import "dotenv/config";

const databaseUrl = `${process.env.MONGODB_DATABASE_URL}`;

const client = new MongoClient(databaseUrl);
client.connect().then((client) => {
  const db = client.db();

  showCollections(db)
    .then((result) => console.log(result))
    .then(() => client.close());
  // db.collection("movies")
  //   .updateOne({ title: "arcane" }, { $set: { title: "Arcane" } })
  //   .then(() => client.close());
});
