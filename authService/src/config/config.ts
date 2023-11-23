import dotenv from "dotenv";
dotenv.config();

const envConfig = {
    mongodbUrl: process.env.MONGODB_URL as string,
    mongodbName: process.env.MONGODB_NAME as string,
};

export default envConfig;
