import mongoose from "mongoose";
/** mongoose allows us to connect the mongoose application */
export default async function connect() {
  await mongoose.connect(
    "mongodb+srv://admin1:admin123@quiz.hohgoih.mongodb.net/"
  );
  // await mongoose.connect(process.env.ATLAS_URI);
  console.log("Database connected");
}
