const mongoose = require("mongoose");

const connect = async () => {
  try {
    // Set the options to avoid deprecation warnings
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Connect to the database
    await mongoose.connect("mongodb://127.0.0.1/chatapp", options);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Optionally, you can throw the error to handle it in the caller function
    // throw error;
  }
};

module.exports = connect;
