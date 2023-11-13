// overall jokon amra object niye kaj krbo tkn Interface use krbo R baki sob somoy type use korbo

type User = {
  name: string;
  age: number;
};

type WithRole = User & {
  role: string;
};

// Interface use krbo sudu object type er datar khetre

interface IUser {
  name: string;
  age: number;
}

interface IExtendUser extends IUser {
  role: string;
}

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 22,
};

// userWithInterface.age

const userWithInterface: IUser = {
  name: "Interface",
  age: 22,
};

const userWithInterfaceExtend: IExtendUser = {
  name: "Extend",
  age: 22,
  role: "Admin",
};

// userWithInterface.name

// Object, Function, Array

type addNumType = (n1: number, n2: number) => number;
interface IAddNumInterface {
  (n1: number, n2: number): number;
}

const addNumber: addNumType | IAddNumInterface = (n1, n2) => n1 + n2;

// Array

type rollNumType = number[];

interface IRollInterface {
  [index: number]: number;
}

const rollNumber: rollNumType = [1, 2, 3, 4];
const rollNumbers: IRollInterface = [1, 3, 2];

// overall jokon amra object niye kaj krbo tkn Interface use krbo R baki sob somoy type use korbo
