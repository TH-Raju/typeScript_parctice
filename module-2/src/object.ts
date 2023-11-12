// explicitly

const user1: {
  company: "PH"; // specific type literal
  readonly country: string; // only can read not update or chagnges
  name: string;
  roll: number;
  isMarried: boolean;
  wife?: string; // string hote abar undefine o hote pare
} = {
  company: "PH", // ph chara onno kicu dile error dibe cz ph nijei 1ta type
  country: "BD",
  name: "Raju",
  roll: 48,
  isMarried: true,
};

console.log(user1);