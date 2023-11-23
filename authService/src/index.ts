import express, { Application } from "express";
import expressConfig from "./frameworks/web/express";
import Server from "./frameworks/web/server";
import router from "./frameworks/web/routes";
// import database from "./frameWorks/database/mongodb/connection/connection";
// import ErrorHandlingMidleware from "./frameWorks/webServer/middlewares/errorMiddleware";
// import AppError from "./utils/appErrors";

const app: Application = express();

// EXPRESS CONFIG
expressConfig(app);
// CREAT SERVER
Server(app);
// Database Connection
// database();
// // Routes
router(app);

// app.use(ErrorHandlingMidleware);

// app.all("*", (req, res, next) => {
//     next(new AppError("Not found", 404));
// });

export default app;
