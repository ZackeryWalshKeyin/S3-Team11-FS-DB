const { poolPG } = require("./pgDAL.js");

async function getLoginByUsername(username) {
  let SQL = `SELECT id AS _id, firstName, lastName, username, password, email FROM public.logins WHERE username = $1`;
  try {
    let results = await poolPG.query(SQL, [username]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}

async function getLoginByEmail(email) {
  let SQL = `SELECT id AS _id, firstName, lastName, username, password, email FROM public.logins WHERE email = $1`;
  try {
    let results = await poolPG.query(SQL, [email]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}

async function getLoginById(id) {
  let SQL = `SELECT id AS _id, firstName, lastName, username, password, email FROM public.logins WHERE id = $1`;
  try {
    let results = await poolPG.query(SQL, [id]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}

async function addLogin(firstName, lastName, username, email, password) {
  let SQL = `INSERT INTO public.logins(firstName, lastName, username, email, password)
      VALUES ($1, $2, $3, $4, $5) RETURNING id;`;
  try {
    let results = await poolPG.query(SQL, [
      firstName,
      lastName,
      username,
      email,
      password,
    ]);
    return results.rows[0].id;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addLogin,
  getLoginByUsername,
  getLoginById,
  getLoginByEmail,
};
