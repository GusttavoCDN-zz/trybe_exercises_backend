import express from 'express';
import UserController from './src/controllers/UserController';

const userController = new UserController();
const app = express();
app.use(express.json());

app.get('/users', userController.getAll);
app.put('/users/:id', userController.update);
app.get('/users/:id', userController.getOne);
app.post('/users', userController.create);


app.listen(3000, () => console.log('API is running'));
