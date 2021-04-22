const sequelize = require('../config/connection');
const { User, Product } = require('../models');

const userData = require('./userData');
const productData = require('./products');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
 
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  const productsSeed = await Product.bulkCreate(productData);

  process.exit(0);
};

seedDatabase();
