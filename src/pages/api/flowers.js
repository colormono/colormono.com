import * as uuid from 'uuid';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    res.status(201).json({});
  }

  if (req.method === 'GET') {
    const item = {
      id: uuid.v4(),
      content: 'Hello world',
      createdAt: Date.now(),
    };

    res.status(200).json(item);
  }

  if (req.method === 'POST') {
    res.status(200).json({});
  }

  if (req.method === 'DELETE') {
    res.status(204).json({});
  }
}
