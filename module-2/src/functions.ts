// normal function
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// array function

const addArrow = (n1: number, n2: number): number => {
  return n1 + n2;
};

// callback function

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map((ar: number) => ar * ar);

// function in object
const person: {
  name: string;
  balance: number;
  addBalance(m: number): void;
  
} = {
  name: "Raju",
  balance: 5,
  addBalance(m: number) {
    console.log(`my new balance ${this.balance + m}`);
  },
};
