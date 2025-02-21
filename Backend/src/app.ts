
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import { checkAuth } from './middlewares/authMiddleware';
import session from 'express-session';

const app = express();

// Use middleware
app.use(cors());             
app.use(bodyParser.json());  

app.use(checkAuth); 


app.use('/auth', authRoutes); 


app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.post('/protected', checkAuth, (req, res) => {
  res.send('This is a protected route');
});

export default app;