const { Pool } = require("pg");
const isProduction = process.env.NODE_ENV === "production";
let pool;

if (isProduction) {
  pool = new Pool({
    connectionString: isProduction
      ? process.env.DATABASE_URL
      : `postgresql://postgres:0000@localhost:5432/crown57`,
  });
} else {
  pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "crown_57",
    password: "0000",
    port: "5432",
  });
}

module.exports = pool;
