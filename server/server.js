require("dotenv").config({
  path: process.env.NODE_ENV === "development" ? ".env.dev" : ".env",
});

const app = require("./src/app");

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

process.on("SIGTERM", () => {
  server.close(() => {
    console.log("Process terminated");
  });
});