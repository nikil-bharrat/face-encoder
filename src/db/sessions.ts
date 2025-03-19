import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  faceEncodings: {
    type: Array<String>,
    required: false,
  },
});

export const SessionModel = mongoose.model("Session", SessionSchema);

export const createSession = (values: Record<string, any>) =>
  new SessionModel(values).save().then((session) => session.toObject());

export const getUserBySessionToken = (sessionToken: string) =>
  SessionModel.findOne({
    "authentication.sessionToken": sessionToken,
  });

export const getSessionById = (sessionId: string) => SessionModel.findById(sessionId);
