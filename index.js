const scores = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];

// Task-1
  const displayName = scores.map (score =>{
      return score.name
  })
  console.log("Task-1")
  console.log(displayName);

// Task-2

const isPassName = scores.filter (item =>{
    return item.marks >= 40
})
console.log("Task-2")
console.log(isPassName);

// Task-3 

const failed = scores.filter ((score)=> score.marks < 40);
console.log("Task-3")
console.log(failed.map((score) => score.name));

// Task-4

const displayAvg = scores.map (score =>{
  return score.marks;
})
const avg = displayAvg.reduce((curr,prev) => curr + prev);
console.log("Task-4")
console.log(avg/displayAvg.length);

// Task-5

const maxMark = scores.map (score => score.marks);
// const maxMark1 = scores.reduce((curr,prev)=> (curr > prev) ? curr : prev);
// console.log(maxMark1);
const highOfAll = maxMark.reduce((curr,prev)=> (curr > prev) ? curr : prev);
// const stuName = highOfAll.map((score) => score.name);
console.log("Task-5") 
console.log(highOfAll);
