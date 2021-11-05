const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || port, () =>
  console.log(
    "\x1b[36m%s\x1b[33m%s\x1b[0m",
    "Backend server is listening on port: ",
    `${process.env.PORT || port}`
  )
);
