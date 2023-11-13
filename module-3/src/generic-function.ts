// Array Function

// explicit vabe bole dilam string[]
/*
const createArray = (param: string): string[] => {
  return [param];
};

const result1 = createArray("Raj");

*/

const createArray = <T>(param: T): T[] => {
  return [param];
};

const result1 = createArray<string>("Raj");
const result2 = createArray<boolean>(true);

type Name = { name: string };
const result3 = createArray<Name>({ name: "BD" });

const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const result4 = createArray1<string, string>("Raj", "Pearl");

// Spread Operator

const crush5 = "Orchita";

const myInfo = {
  name: "Raj",
  age: 22,
};

// const newData = {...myInfo, crush5}

const addMyCrush = <T>(param: T) => {
  const crush6 = "sporshia ";
  const newData = {
    ...param,
    crush6,
  };
  return newData;
};

const result5 = addMyCrush(myInfo);
result5.name;

// normal function

function createArray7<X, Y>(p1: X, p2: Y): [X, Y] {
  return [p1, p2];
}
