// type ta kmn hobe ta force kore bole deya like extends

const addCrushMind = <T extends { name: string; age: number }>(info: T) => {
  const crush7 = "Mukta";
  const crushMind = {
    ...info,
    crush7,
  };
  return crushMind;
};

type InfoType = {
  name: string;
  age: number;
};

const info: InfoType = {
  name: "Raj",
  age: 200,
};

const result6 = addCrushMind(info);
