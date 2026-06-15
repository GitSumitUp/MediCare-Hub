import mongoose from "mongoose";

export const dbConnection = async() => {
   await mongoose.connect(process.env.MONGO_URI, {
        dbName: "healthcare_system_db"
   }).then(() => {
        console.log("Connected to database!");
    }).catch((err) => {
        console.error(`Some error occured while connecting to database: ${err}`);
    });
};
