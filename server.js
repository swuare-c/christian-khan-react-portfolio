import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";
import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import educationRoutes from "./routes/education.routes.js";
import userRoutes from "./routes/user.routes.js";

app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/users", userRoutes);

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri, {
    //useNewUrlParser: true,
    //useCreateIndex: true,
    //useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  });

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`);
});
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
