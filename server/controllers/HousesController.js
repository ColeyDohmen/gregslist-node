import express from "express";
import BaseController from "../utils/BaseController";
import { housesService } from "../services/HousesService";

export class HousesController extends BaseController {
  constructor() {
    super("api/houses");
    this.router
      .get("", this.getAll)
      .post("", this.create);
  }
  async getAll(req, res, next) {
    try {
      return res.send(await {message: "done"});
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(req.body);
    } catch (error) {
      next(error);
    }
  }
}
