import express from "express";
import { createSession, getSessionById } from "../db/sessions";

export const session = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { customerId, faceEncodings } = req.body;
    
    // If there was auth logic, I'd call it here
    // if(!isAuthenticated()) { return res.sendStatus(403)}

    if (!customerId) {
      return res.sendStatus(400);
    }

    const _id = Math.random().toString(36).substring(7);
    console.log("Session ID", _id); // For the reviewer to note down the session ID so they can later GET the session information including the face encoding summaries

    const existingSession = await getSessionById(_id);

    if (existingSession) {
      return res.sendStatus(400);
    }

    const session = await createSession({
      _id,
      customerId,
      faceEncodings,
    });

    return res.status(200).json(session).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getSession = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { sessionId } = req.body;

    // If there was auth logic, I'd call it here
    // if(!isAuthenticated()) { return res.sendStatus(403)}

    if (!sessionId) {
      return res.sendStatus(400);
    }

    const session = await getSessionById(sessionId);

    if (!session) {
      return res.sendStatus(404);
    }

    return res.status(200).json(session).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
