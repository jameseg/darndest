import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from './server';

describe('GET /', () => {
  it('responds with 200', async () => {
    const response = await fetch('http://localhost:5200/');
    expect(response.status).toBe(200);
  });

  it('responds with Hello World', () => {
    request(app).get('/').expect(200).expect('Hello World');
  });
});
