const organizeInstructors = function (instructors) {
  let rtn = {};

  for (let instructor of instructors) {
    if (rtn[instructor.course]) {
      rtn[instructor.course].push(instructor.name);
    } else {
      rtn[instructor.course] = [];
      rtn[instructor.course].push(instructor.name);
    }
  }

  return rtn;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));

/*
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/