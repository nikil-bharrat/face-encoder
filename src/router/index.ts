import express from "express";
import session from "./session";

const router = express.Router();

export default (): express.Router => {
    session(router);
    
    return router;
}

