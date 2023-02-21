import request from 'supertest';
import app from './app';

describe('API endpoints', () => {
  let itemId: string;

  test('POST /items', async () => {
    const response = await request(app)
      .post('/items')
      .send({ name: 'Item 1', description: 'Description 1', quantity: 10 });
   
