/*
 generic hcce generalize
 kono 1ta jinis jodi general vabe lekhte pari setai generic type

  */

const rollNum: number[] = [22, 33, 44];
const rollNum1: string[] = ["a", "b", "c"];

const rollNum2: Array<number> = [11, 23, 34];
const rollNum3: Array<string> = ["abr", "des"];

const userRollNum: Array<{ name: string; roll: number }> = [
  {
    name: "MR. X",
    roll: 22,
  },
];

// more generic type  like ---

type GenericArray = Array<number>;
const rollNum4: GenericArray = [11, 23, 34];

// parameter o use korte pari

type GenericArrays<T> = Array<T>;
const rollNum5: GenericArrays<number> = [11, 23, 34];

type NameRollType = { name: string; roll: number };
const userRollNums: GenericArrays<NameRollType> = [
  {
    name: "MR. X",
    roll: 22,
  },
];

// tuple

type GenericTuple<T, Y> = [T, Y];

const relation: GenericTuple<string, number> = ["Raju", 4];

const relationWithSalary: GenericTuple<object, string> = [
  {
    name: "Raj",
    salary: 100,
  },
  "Pearl",
];

// same as

const relationWithJob: GenericTuple<{ name: string; dream: string }, number> = [
  {
    name: "Raj",
    dream: "SWE",
  },
  5,
];
