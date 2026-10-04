import mysql from 'mysql2/promise';

const conexion = mysql.createPool({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER || 'solar',
  password: process.env.DATABASE_PASSWORD || '123456',
  database: process.env.DATABASE_NAME || 'solar_eye',
  port: Number(process.env.DATABASE_PORT) || 3306,
  multipleStatements: false,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : (undefined as any)
});

export default conexion;