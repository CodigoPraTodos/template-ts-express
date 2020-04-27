require("dotenv-safe").config();

const app = {
    name: "CodigoPraTodos.com - Template Express Api",
    version: "0",
    host: process.env.APP_HOST || "",
    port: +(process.env.APP_PORT || "0"),
    environment: "development",
};

const db = {
    client: process.env.DB_CONNECTION,
    connection: {
        charset: "utf8",
        timezone: "UTC",
        host: process.env.DB_HOST,
        port: +(process.env.DB_PORT || "5432"),
        database: process.env.NODE_ENV === "test" ? process.env.TEST_DB_NAME : process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
};

export default {
    app,
    db,
};
