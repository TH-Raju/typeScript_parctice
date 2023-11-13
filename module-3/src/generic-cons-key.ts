type personType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";
type newTypeUsingKeyOf = keyof personType;

const a: newType = "address";
const b: newTypeUsingKeyOf = "address";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty({ name: "Raj", age: 200 }, "age");
