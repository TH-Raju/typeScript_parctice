"use strict";
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "senior";
})(Level || (Level = {}));
// Union
const newDev = {
    naam: "Raju",
    expertise: "JS",
    experience: 4,
};
const developer = {
    naam: "Raj",
    expertise: "JS",
    experience: 3,
    leadership: 4,
    level: Level.junior,
};
