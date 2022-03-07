import { CollectionInfo, Db } from "mongodb";

export async function showCollections(db: Db): Promise<(CollectionInfo | Pick<CollectionInfo, "name" | "type">)[]> {
  return db.listCollections().toArray();
}
