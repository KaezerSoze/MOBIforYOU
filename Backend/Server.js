import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./src/routes/auth.routes.js"
import router from "./src/routes/.route.js";


dotenv.config();



const app = express();
const port = process.env.PORT || 5020;



const corsOption = {
  origin: "http://localhost:5174",
  OptionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/", router);
app.use("/auth", authRouter);



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
