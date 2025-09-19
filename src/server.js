require("dotenv").config();
const connectDB = require("../db/mongoConnection");
const { sendEmail } = require("./emailService/emailService");

// Export sendEmail for external usage
module.exports = { sendEmail };

(async () => {
  try {
    await connectDB(); // 🔌 connect to DB first
    console.log("Server ready, DB connected");
  } catch (err) {
    console.error("Failed to connect to DB:", err.message);
    process.exit(1); // exit process if DB not connected
  }
})();
