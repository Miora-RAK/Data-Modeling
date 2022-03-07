import { Db } from "mongodb";
type Movie = {
  title: string;
  genre: string;
  year: string;
};
const movie: Movie = {
  title: "Arcane",
  genre: "Animation",
  year: "2021",
};

export async function insertOneMovie(db: Db): Promise<Movie> {
  return db
    .collection("movies")
    .insertOne(movie)
    .then(() => {
      return movie;
    });
}
