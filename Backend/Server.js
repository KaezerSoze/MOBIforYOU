import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/auth.route.js";








dotenv.config();



const app = express();
const port = process.env.PORT || 5020;



const corsOption = {
  origin: "http://localhost:5173",
  
  OptionSuccessStatus: 200,
};

app.use(cors(corsOption));
app.use(express.json());

app.use("/", router);





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
