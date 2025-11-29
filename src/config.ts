export const config = {
  port: process.env.PORT || 3000,

  db: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'naqla',
    password: process.env.DB_PASSWORD || 'naqla_secure_2024',
    database: process.env.DB_NAME || 'naqla',
  },

  meilisearch: {
    host: process.env.MEILI_HOST || 'http://localhost:7700',
    apiKey: process.env.MEILI_KEY || 'naqla_meili_key_2024',
  },

  soketi: {
    host: process.env.SOKETI_HOST || 'localhost',
    port: parseInt(process.env.SOKETI_PORT || '6001'),
    appId: process.env.SOKETI_APP_ID || 'naqla',
    key: process.env.SOKETI_KEY || 'naqla_app_key',
    secret: process.env.SOKETI_SECRET || 'naqla_app_secret',
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'naqla_jwt_secret_change_in_production',
    expiresIn: '7d',
  },
};
