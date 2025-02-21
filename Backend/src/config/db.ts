import sql, {ConnectionPool, config as SqlConfig} from "mssql";
import dotenv from "dotenv";
// import { config } from "node:process";

dotenv.config();

const dbConfig : SqlConfig= {
  user: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  server: process.env.DB_SERVER!,
  database: process.env.DB_NAME!,
  port: process.env.AZURE_SQL_PORT ? parseInt(process.env.AZURE_SQL_PORT) : 1433,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

let pool: ConnectionPool | null = null;

export const connectDB = async () => {
 
    if (!pool) {
      return pool;
      
    }
    try {
      pool = await sql.connect(dbConfig);
      console.log("Connected to Azure SQL Database ✅");
  } catch (err) {
    console.error("Database connection failed ❌", err);
  }
};



export default sql;

