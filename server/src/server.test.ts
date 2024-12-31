import request from 'supertest';
import { describe, it } from 'vitest';
import app from './server';

describe('GET /', () => {
  it('responds successfully with Hello World', () => {
    request(app).get('/').expect(200).expect('Hello World');
  });
});
