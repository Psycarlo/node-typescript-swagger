import { Controller, Get, Route } from "tsoa";
import { Request, Response } from "../types/express";

@Route("/example")
export class ExampleController extends Controller {
  @Get("/{id}")
  public async getTwo(id: string): Promise<String> {
    return `Example: ${id} + ${id}`;
  }
}
