import app from "./app";

const PORT = process.env.PORT || 4321;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
