import * as mongo from "mongodb";

// export const moviesValidator = {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       additionalProperties: false,
//       required: ["_id", "title", "genre", "year"],
//       properties: {
//         _id: {
//           bsonType: "objectId",
//         },
//         title: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         genre: {
//           bsonType: "string",
//           enum: ["Action", "SuperHero", "Sci-Fi", "Animation"],
//         },
//         year: {
//           bsonType: "int",
//           minimum: 1950,
//           maximum: 2022,
//           description: "must be an integer in [ 1950, 2022 ]",
//         },
//       },
//     },
//   },
// };

export function createMoviesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("movies");
}
