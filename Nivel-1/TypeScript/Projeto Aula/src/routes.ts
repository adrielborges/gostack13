import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloword(request: Request, response: Response) {
  const user = createUser({
    email: 'adriellucas@gamil.com',
    password: '123456',
    techs: [
      'Node.js',
      'React.js',
      'React-Native',
      { title: 'JavaSccript', experience: 100 }
    ],
  });

  return response.json({ message: 'Hello Wolrd' });
}
