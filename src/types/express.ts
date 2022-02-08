import {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import * as core from "express-serve-static-core";

export interface Request<
  Params = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query
> extends ExpressRequest<Params, ResBody, ReqBody, ReqQuery> {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Response<ResBody = any, Locals = Record<string, any>>
  extends ExpressResponse<ResBody, Locals> {} // can be extended if needed
