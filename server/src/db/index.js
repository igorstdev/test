const {Client} = require('pg');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const client = new Client(config);


function initializeDb() {
  return new Promise(async (resolve, reject) => {
    
    client.connect((err, res) => {
      if(err){
        return reject('Connection failed');
      }
    });
  
    const usersTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    fullName TEXT,
    username TEXT
);
`;
    const phoneNumbersTableQuery = ` CREATE TABLE IF NOT EXISTS phones (
    id SERIAL PRIMARY KEY,
    phone_number text ,
    user_id integer REFERENCES users (id) ON DELETE CASCADE
);
`;
  
  
    try {
     await client.query(usersTableQuery);
     await client.query(phoneNumbersTableQuery);
      resolve()
    } catch (e) {
      return reject('Connection failed');
    }
  });
}

module.exports = {
  initializeDb,
  client,
};