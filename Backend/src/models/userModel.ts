import { connectDB } from "../config/db";
import sql from "mssql";
export const findUserByUsername = async (email: string) => {
  const pool = await connectDB();
  if (!pool) throw new Error("Database connection is not established.");
 
  const result = await pool
    .request()
    .input("email", sql.VarChar, email)
    .query("SELECT * FROM Accounts WHERE email = @email");
  return result.recordset[0];
};

export const createUser = async (username: string, hashedPassword: string, email: string, mobile: string) => {
  const pool = await connectDB();
  await pool
    .request()
    .input("username", sql.VarChar, username)
    .input("password", sql.VarChar, hashedPassword)
    .input("email", sql.VarChar, email)
    .input("mobile", sql.VarChar, mobile)
    .query("INSERT INTO Accounts (username, password, email, mobile) VALUES (@username, @password, @email, @mobile)");
};
