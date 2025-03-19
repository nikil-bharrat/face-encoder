import express from "express";

import { getSession, initialiseSession } from "../controllers/session";

export default (router: express.Router) => {
  router.post("/session/create", initialiseSession);
  router.get("/session", getSession);
};
