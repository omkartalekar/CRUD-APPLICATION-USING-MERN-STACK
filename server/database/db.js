import mongoose from "mongoose";

const Connection = async (URL) => {
 

  try {
    await mongoose.connect(URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("Databse connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};

export default Connection;
