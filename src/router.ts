import { Router } from "express";
import { example } from "./endpoints";

const router = Router();

/**
 * @swagger
 * /test
 *  get:
 *  summary: Get Example
 *  responses:
 *    200:
 *      description: the example
 */
router.get("/example/:id", example.getOne);

export default router;
