const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log(`Searching...`);
  }
};

searchName(null);

// Unknown type

const getMySpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const converted = (speed * 1000) / 3600;
    console.log(`My speed is ${converted}`);
  }

  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const converted = (parseFloat(value) * 1000) / 3600;
    console.log(`My speed is ${converted}`);
  } else {
    console.log("There is wrong type");
  }
};

getMySpeed(10);
getMySpeed("20 kph");

// Never Types

// ata kkno konodin kono kicu return korbe na means never

function throwError(message: string): never {
  throw new Error(message);
}

throwError("Error khaico monu");
