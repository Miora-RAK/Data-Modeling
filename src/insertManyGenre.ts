import { Db } from "mongodb";
// type Array = {
//   _id: ObjectId,
// }
type Genre = {
  name: string;
  // films: Array[] ;
};
const genre: Genre[] = [
  {
    name: "Animation",
  },
  {
    name: "SuperHero",
  },
  {
    name: "Sci-Fi",
  },
];

export async function insertManyGenre(db: Db): Promise<Genre[]> {
  return db
    .collection("genre")
    .insertMany(genre)
    .then(() => {
      return genre;
    });
}
