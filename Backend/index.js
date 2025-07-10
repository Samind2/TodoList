// index.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routers/todo.routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// เชื่อม route
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
