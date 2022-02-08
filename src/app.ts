import express from "express";
import expressWs from "express-ws";

const expressWsInstance = expressWs(express());

const app = expressWsInstance.app;
export const getWss = expressWsInstance.getWss;

export const broadcast = (
  msg: string | Record<string, unknown> | Array<unknown>
): void => {
  getWss().clients.forEach((client) => {
    client.send(JSON.stringify(msg));
  });
};

export default app;
