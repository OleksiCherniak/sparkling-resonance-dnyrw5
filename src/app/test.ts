interface IUser {
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  address: {
    zipCode: number;
    countryCode: string;
  };
}

const defaultUser: IUser = {
  name: 'Mykola',
  age: 27,
  gender: 'male',
  address: {
    zipCode: 777777,
    countryCode: 'UA',
  },
};

const inputUser: IUser = {
  name: 'Mykola',
  age: 27,
  gender: 'male',
  address: {
    zipCode: 777777,
    countryCode: 'US',
  },
};
type DeepPartial<T> = {};
export function PatchUser(user: DeepPartial<IUser>) {
  //
}

PatchUser({ name: 'Ihor' });
PatchUser({ name: 'Ihor', age: 54 });
PatchUser({ name: 'Ihor', address: { zipCode: 88888 } });
