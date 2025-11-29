import { betterAuth } from 'better-auth';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import { config } from '../config';

const pool = new Pool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

const db = new Kysely({
  dialect: new PostgresDialect({ pool }),
});

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || 'https://buyervoice.net',
  secret: process.env.BETTER_AUTH_SECRET || config.jwt.secret,

  database: {
    db,
    type: 'postgres',
  },

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    minPasswordLength: 1,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    },
  },

  user: {
    additionalFields: {
      phone: {
        type: 'string',
        required: false,
      },
      city: {
        type: 'string',
        required: false,
      },
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },

  trustedOrigins: [
    'https://buyervoice.net',
    'http://localhost:3000',
  ],
});
