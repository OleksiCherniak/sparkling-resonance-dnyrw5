import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  role: 'admin' | 'user' | 'guest';
  address: {
    city: string;
    zip: string;
  };
}

const MOCK_USERS: User[] = [
  {
    id: 9,
    name: 'Alice',
    role: 'admin',
    address: { city: 'Kyiv', zip: '01001' },
  },
  {
    id: 10,
    name: 'Bobby',
    role: 'user',
    address: { city: 'Lviv', zip: '77777' },
  },
  {
    id: 7,
    name: 'Aly Johnson',
    role: 'admin',
    address: {
      city: 'Kyiv',
      zip: '01001',
    },
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'user',
    address: {
      city: 'Lviv',
      zip: '79000',
    },
  },
  {
    id: 3,
    name: 'Charlie Brown',
    role: 'guest',
    address: {
      city: 'Odesa',
      zip: '65000',
    },
  },
  {
    id: 4,
    name: 'Diana Prince',
    role: 'admin',
    address: {
      city: 'Kharkiv',
      zip: '61000',
    },
  },
  {
    id: 5,
    name: 'Eve Adams',
    role: 'user',
    address: {
      city: 'Dnipro',
      zip: '49000',
    },
  },
];

@Injectable({ providedIn: 'root' })
export class UserService {
  private users = [...MOCK_USERS];

  getUsers(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  getFilters() {}
}
