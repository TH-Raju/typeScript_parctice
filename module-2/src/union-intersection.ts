type NoobDev = {
  naam: string;
};

// type JrDev = {
//   naam: string;
//   expertise: string;
//   experience: number;
// };

// Intersection

type JrDev = NoobDev & {
  expertise: string;
  experience: number;
};
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "senior",
}

type NextLevelDev = JrDev & {
  leadership: number;
  level: Level;
};

// Union

const newDev: NoobDev | JrDev = {
  naam: "Raju",
  expertise: "JS",
  experience: 4,
};

const developer: NextLevelDev = {
  naam: "Raj",
  expertise: "JS",
  experience: 3,
  leadership: 4,
  level: Level.junior,
};
