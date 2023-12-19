console.log("entro a model")

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize ('vinoteca', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306 
});


// test para verificar si esta conectada a la DB.
(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})();


module.exports = sequelize;