import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { findUserByUsername, createUser } from "../models/userModel";
import session from "express-session";

interface AuthRequest extends Request {
    session: session.Session & Partial<session.SessionData>;
    body: {
        username: string;
        password: string;
      };
}

export const login = async (req: AuthRequest, res: Response): Promise<Response> => {
    try {
      const { username, password } = req.body;
  
      // Implement your authentication logic here
      if (username === 'admin' && password === 'password') {
        
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };

export const logout = (req: AuthRequest, res: Response) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.json({ message: "Logged out successfully" });
  });
};

export const signup = async (req: AuthRequest, res: Response): Promise<Response> => {
    try {
      const { username, password } = req.body;
  
      
      if (username && password) {
        
        return res.status(201).json({ message: 'User registered successfully' });
      } else {
        return res.status(400).json({ message: 'Missing username or password' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  };