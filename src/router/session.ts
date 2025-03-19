import express from "express";

import { getSession, session } from "../controllers/session";

export default (router: express.Router) => {
  router.post("/session/create", session);
  router.get("/session", getSession);
};
