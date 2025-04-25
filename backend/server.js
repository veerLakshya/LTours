const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

// Load environment variables
const env = dotenv.config({ path: './config.env' });
if (env.error) {
  console.error('Failed to load environment variables:', env.error);
  process.exit(1);
}

// Replace password in the database connection string
const DB = process.env.DATABASE;

console.log('Connecting to DB:', DB);

// Connect to the database
mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.error('DB connection failed:', err.message);
  });

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App is running on port number ${port}`);
});
