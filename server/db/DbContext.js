import ValueSchema from "../models/Value";
import HouseSchema from "../models/House";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Houses = mongoose.model("House", ValueSchema);
}

export const dbContext = new DbContext();
