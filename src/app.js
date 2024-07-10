require('dotenv').config();
const express = require('express');
const sequelize = require('./database/config');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

sequelize.sync({ force: true }).then(() => {
  console.log('Database synchronized');
}).catch(err => {
  console.error('Unable to synchronize the database:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
