require('dotenv').config(); // 🔹 Load .env file

const app = require("./app");
const PORT = process.env.PORT; // fallback if .env is missing

app.listen(PORT, () => {
    console.log("✅ Server running on port:", PORT);
});