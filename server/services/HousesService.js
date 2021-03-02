import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class HousesService {

  async create(newHouse){
    return await dbContext.Houses.create(newHouse)
  }
  async find(query={}) {
    let values = await dbContext.Values.find(query);
    return values;
  }
  async findById(id) {
    let value = await dbContext.Values.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const housesService = new HousesService();