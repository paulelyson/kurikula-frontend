export interface MongoDocument {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  deleted?: boolean;
  __v: number;
}
