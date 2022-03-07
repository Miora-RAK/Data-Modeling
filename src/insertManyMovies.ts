import { Db } from "mongodb";
type Movie = {
  title: string;
  genre: string;
  year: string;
};
const someMovies: Movie[] = [
  {
    title: "Arcane",
    genre: "Animation",
    year: "2022",
  },
  {
    title: "One Piece",
    genre: "Animation",
    year: "1999",
  },
  {
    title: " La Légende de Vox Machina ",
    genre: "SuperHero",
    year: "2022",
  },
  {
    title: "Les Éternels ",
    genre: "SuperHero",
    year: "2021",
  },
  {
    title: "Dune ",
    genre: "Sci-Fi",
    year: "2021",
  },
  {
    title: "Peacemaker ",
    genre: "Sci-Fi",
    year: "2022",
  },
  {
    title: "Reacher",
    genre: "Action",
    year: "2021",
  },
  {
    title: "Uncharted",
    genre: "Action",
    year: "2022",
  },
  {
    title: "Moonfall",
    genre: "Sci-Fi",
    year: "2022",
  },
  {
    title: "The Witcher",
    genre: "Action",
    year: "2019",
  },
  {
    title: "Matrix Resurrections ",
    genre: "Action",
    year: "2021",
  },
];
export async function insertManyMovies(db: Db): Promise<Movie[]> {
  return db
    .collection("movies")
    .insertMany(someMovies)
    .then(() => {
      return someMovies;
    });
}
