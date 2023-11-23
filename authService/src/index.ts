import express, { Application, Request, Response } from "express";
import "express-async-errors";
import { NotFoundError, errorHandler, DatabaseConnError } from "@webdiari/common";
import mongoose from "mongoose";

import expressConfig from "./frameworks/web/express";
import server from "./frameworks/web/server";
import router from "./frameworks/web/routes";
import MongoDb from "./frameworks/database/mongodb/connection/connection";
import envConfig from "./config/config";

const app: Application = express();

const start = async () => {
    // connecting mongodb database
    const mongo = new MongoDb(mongoose, { reconnectInterval: 5000 });
    await mongo.connect().catch((err) => {
        throw new DatabaseConnError();
    });

    expressConfig(app);
    router(app);

    app.all("*", (req: Request, res: Response) => {
        throw new NotFoundError();
    });
    app.use(errorHandler);

    // starting server
    server(app).start();
};

start();

export { app };
