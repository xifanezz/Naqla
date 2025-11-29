import * as bcrypt from 'bcrypt';
import { SignJWT, jwtVerify } from 'jose';
import { config } from '../config';

const secret = new TextEncoder().encode(config.jwt.secret);

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function createToken(userId: number, phone: string): Promise<string> {
  return new SignJWT({ userId, phone })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(config.jwt.expiresIn)
    .sign(secret);
}

export async function verifyToken(token: string): Promise<{ userId: number; phone: string } | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { userId: number; phone: string };
  } catch {
    return null;
  }
}
