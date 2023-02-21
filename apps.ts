import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/my-database', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema and model for the items
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number,
});
const Item = mongoose.model('Item', itemSchema);

// Define API endpoints
app.post('/items', async (req: Request, res: Response) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.send(newItem);
});

app.get('/items', async (req: Request, res: Response) => {
  const items = await Item.find({});
  res.send(items);
});

app.get('/items/:id', async (req: Request, res: Response) => {
  const item = await Item.findById(req.params.id);
  res.send(item);
});

app.put('/items/:id', async (req: Request, res: Response) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updatedItem);
});

app.delete('/items/:id', async (req: Request, res: Response) => {
  await Item.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

// Serve API documentation with Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
