import { Request, Response } from "../types/express";

/**
 * @swagger
 * /test
 *  get:
 *  summary: Get Example
 *
 */

const getOne = async (req: Request, res: Response): Promise<void> => {
  const exampleId = req.params.id;
  res.status(200).send(`Example: ${exampleId}`);
};

export default {
  getOne,
};
