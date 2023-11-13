let emni: any;

emni = "Emni";

// jodi sudu emni. (dot) d tahle kono method pabo na
// emni.

// but type assertion kore bole dile ata ki type tahle methods pabo
(emni as string).length;

// evabe o lekha jay

<string>emni;

type Maybe = string | number | undefined;

function kgToGram(param: Maybe): Maybe {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is : ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram("2000") as string;

console.log(resultToBeNumber);
