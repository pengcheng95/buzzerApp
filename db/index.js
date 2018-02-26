import keys from '../keys.js';

const Sequelize = require('sequelize');

const sequelize = new Sequelize(keys.DB_NAME, keys.DB_USER, keys.DB_PASS, {
  host: keys.DB_HOST,
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully with buzzme');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const User = sequelize.define('user', {
	username: {type: Sequelize.STRING, unique: true},
	password: {type: Sequelize.STRING},
})

User.sync({force: false});


export default sequelize;
