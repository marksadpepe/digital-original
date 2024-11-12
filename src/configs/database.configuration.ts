export type DBConfigType = {
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
};

export const getDbConfig = (): DBConfigType => {
  const { DB_URL } = process.env;
  if (!DB_URL) {
    throw new Error("Database URL was not specified");
  }

  const { username, password, hostname, port, pathname } = new URL(DB_URL);
  if (!username || !password || !hostname || !pathname) {
    throw new Error("Incorrect database URL format");
  }

  const database = pathname[0] === "/" ? pathname.slice(1) : pathname;
  if (!database) {
    throw new Error("Incorrect database name format");
  }

  const parsedPort = parseInt(port ?? "");
  if (typeof parsedPort !== "number" || isNaN(parsedPort)) {
    throw new Error("Incorrect database port format");
  }

  return {
    user: username,
    password,
    host: hostname,
    port: parsedPort,
    database
  };
};
