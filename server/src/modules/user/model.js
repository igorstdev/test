const {client} = require('../../db');
const { makePhoneQuery } = require('../../utils/userUtils');

class  UserModel{
  
  static getAll = async () => {
    try {
      const {rows} = await client.query(`SELECT * FROM users`);
       return rows
    } catch (err) {
      throw err;
    }
  };
  
  static get = async id => {
    try {
      const {rows} = await client.query('SELECT * FROM users WHERE id=$1', [id],);
      return rows;
    } catch (err){
      throw err;
    }
  };
  
  static post = async user => {
    try {
      const {rows: userRow} = await client.query(`INSERT INTO users VALUES (DEFAULT, '${user.email}', '${user.fullname}', '${user.username}') RETURNING *`);
      const phoneQuery = makePhoneQuery({ ...user, id: userRow[0].id});
      const {rows: phoneRow} = await client.query(` INSERT INTO phones VALUES ${phoneQuery} RETURNING id, phone_number`);
      return {...userRow, phone_numbers: phoneRow};
    } catch (err){
      throw err;
    }
  };
  
  static update = async (user, id) => {
    try {
      const {rows: userRow} = await client.query(`UPDATE users SET
      email = '${user.email}', fullname = '${user.fullname}', username = '${user.username}'
      WHERE id=${id} RETURNING *`);
      const phoneQuery = makePhoneQuery({ ...user, id: userRow[0].id});
      const {rows: phoneRow} = await client.query(` INSERT INTO phones VALUES ${phoneQuery} RETURNING *`);
      return { ...userRow[0], ...phoneRow[0] };
    } catch (err){
      throw err;
    }
  };
  
  static delete = async (userId) => {
    try {
      const {rows} = await client.query(`DELETE FROM users WHERE id = ${userId} RETURNING *`);
      return rows;
    }
     catch (err) {
      throw err;
    }
  };
  
}

module.exports = UserModel;