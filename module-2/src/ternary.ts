// Ternary operator

const age: number = 22;

// if (age > 18) {
//   console.log("yes");
// } else {
//   console.log("No");
// }

const isAdult = age >= 18 ? "yes" : "no";
console.log(isAdult);

// Nullish Coeslancing Operator

const isAuthenticatedUser = null; // Null or undefiend

const userName = isAuthenticatedUser ?? "guest";
console.log(userName);

type Manus = {
  name: string;
  age: number;
  address: {
    city: "No City";
    road: "No road";
    home?: "";
  };
};

const manus1: Manus = {
  name: "Raj",
  age: 22,
  address: {
    city: "No City",
    road: "No road",
  },
};

const home = manus1?.address?.home ?? "No Home"; // Nullish Coeslancing operator
console.log({home});
