import {join} from "path";
import {getDbConfig, DBConfigType} from "../configs";

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
