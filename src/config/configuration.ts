export default () => ({
    port: process.env.PORT || 3000,
    DATABASE_URI: process.env.DATABASE_URI,
    USER_SECRET_KEY: process.env.USER_SECRET_KEY,
  });