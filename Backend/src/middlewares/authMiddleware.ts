
import { Request, Response, NextFunction } from 'express';

export const checkAuth = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers['authorization'];

  if (!token) {
    d
    res.status(403).send('No token provided');
    return; 
  }

  try {
    
    next();
  } catch (error) {
    
    res.status(401).send('Unauthorized');
    return; 
  }
};

