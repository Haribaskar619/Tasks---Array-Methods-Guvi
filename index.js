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
  const displayName = scores.map (item =>{
      return item.name
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

const isFailName = scores.filter (item =>{
    return item.marks < 40
})
console.log("Task-3")
console.log((isFailName));



