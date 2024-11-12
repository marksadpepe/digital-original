import {join} from "path";
import {config} from "dotenv";
import {getDbConfig, DBConfigType} from "../configs";

const envPath = join(__dirname, "..", "..", ".env");
config({ path: envPath })

const databaseConfig: DBConfigType = getDbConfig();
const migrationsDir = join(__dirname, "migrations");

module.exports = {
  development: {
    client: "pg",
    connection: {
      ...databaseConfig
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations",
      directory: migrationsDir,
      disableTransactions: true,
    },
  }
};
