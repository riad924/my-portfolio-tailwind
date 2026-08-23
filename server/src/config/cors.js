const cors = require("cors");

app.use(
  cors({
    origin: "https://my-portfolio-tailwind-t253.vercel.app",
    credentials: true,
  })
);