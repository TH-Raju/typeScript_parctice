// a type is dependent on another type

type a1 = string;
type a2 = a1 extends string ? string : null;

type Sheikh = {
  wife1: string;
  wife2: string;
};

type A = keyof Sheikh
type CheckProperty<T, K> = K extends A  ? true : false;

type CheckWife1 = CheckProperty<Sheikh,"wife1">;
