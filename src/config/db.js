const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "aarushi",
  password: "",       
  database: "auth_backend"
});

module.exports = pool;