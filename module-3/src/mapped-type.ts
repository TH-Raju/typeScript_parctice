const arrayofNumbers = [1, 2, 3];
const arrayofStrings = arrayofNumbers.map((num) => num.toString());
console.log(arrayofStrings);

type Volume = {
  height: number;
  width: number;
};

// mapped

type Area<T> = {
  //   [key in keyof Volume]: Volume[key];
  [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: string }> = {
  height: 10,
  width: "10",
};

type AreaString = {
  height: string;
  width: string;
};

type Aa = Volume["height"]; // lookup type
type B = keyof Volume;
