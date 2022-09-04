module.exports = ({ env }) => ({
  // connections: {
  //   default: {
  //     connector: "bookshelf",
  //     settings: {
  //       client: "postgres",
  //       host: env("DATABASE_HOST", "localhost"),
  //       port: env.int("DATABASE_PORT", 5432),
  //       database: env("DATABASE_NAME", "blogapp"),
  //       user: env("DATABASE_USERNAME", "postgres"),
  //       password: env("DATABASE_PASSWORD", "strapi"),
  //       ssl: false,
  //     },
  //   },
  // },
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', '<database_name>'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '<database_password>'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: false
    },
    debug: false,
  },
});

// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });
