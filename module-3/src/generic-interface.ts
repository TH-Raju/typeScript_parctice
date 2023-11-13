// Generic Interface

interface ICrushInterface<T, U = null> {
  name: string;
  husband: T;
  loyal?: U;
}

const crush1: ICrushInterface<boolean> = {
  name: "Pearl",
  husband: true,
};

const crush2: ICrushInterface<string> = {
  name: "Pearl",
  husband: "king",
};

const crush3: ICrushInterface<object, boolean> = {
  name: "Pearl",
  husband: {
    name: "Raj",
    home: "Feni",
  },
  loyal: true,
};

interface Ihusband {
  name: string;
  salary: number;
}

const crush4: ICrushInterface<Ihusband> = {
  name: "Pearl",
  husband: {
    name: "King",
    salary: 20,
  },
};

console.log(crush3);
