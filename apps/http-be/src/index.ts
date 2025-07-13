import express from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/be-common/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/signup', (req, res) => {
  // Here you would handle the signup logic
  res.send('Signup endpoint');
});

app.post('/signin', (req, res) => {
  // Here you would handle the signin logic
  res.send('Signin endpoint');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});