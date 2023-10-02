// //const friends = ['Melissa', 'Mark', 'Andrew', 'Nick']

// // friends.forEach((friend) => {
// //     console.log(`i have a frend named ${friend.toLowerCase()}`)
// // })

// // const nums = [1, 2, 3]
// // const squareNums = nums.map((nums)=> nums * nums)
// // console.log(squareNums)

// // const people = [
// //     {name: 'Fred', town: 'Bedrock'},
// //     {name: 'Susan', town: 'Miami'},
// //     {name: 'John', town: 'Arcadia'}
// //   ];
  
// //   const els = people.map((person, idx) =>{
// //     const el = document.createElement('div');
// //     el.innerHTML = `${person.name} is from ${person.town}`
// //     return el
// //     }
// // )

// // els.forEach(el => document.body.append(el))
// //console.log(els)

// const instructors = ['Alex', 'Staphnie', 'Daniel'];
// const arrInstructors = instructors.map((instructor, idx) => {
//  return `${instructor} is awesome`
// }
// )

//  //console.log(arrInstructors)

// const nums = [1, 2, 5, 6, 9, 8, 7]
// const odds = nums.filter((nums) => nums % 2)

// //console.log(odds)

// const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people']
// const nicePeople = people.filter((people) => people === 'nice people')
// //console.log(nicePeople)

// const cars = [
//     {color: 'red', make: 'BMW', year: 2001},
//     {color: 'white', make: 'Toyota', year: 2013},
//     {color: 'black', make: 'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
//   ];

//   const firstWhiteCar = cars.find((car) => car.color === 'white')
//   //console.log(firstWhiteCar)

// const missingCar = cars.find((car) => car.color ==='blue')
// //console.log(missingCar)

// const notTooOldCar = cars.find((car) => car.year > 2014)
// //console.log(notTooOldCar)

// const idxFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015)
// //console.log(idxFirstCarNewerThan2015)

// const missingCarIdx = cars.findIndex((car) => car.year > 2020)
// //console.log(missingCarIdx)

// const hasFord = cars.some((car) => car.make === 'Ford')
// //console.log(hasFord)

// const sum = nums.reduce((acc, num) => {
//     //console.log(acc, num)
//         return acc + num
// })

// //another way to use REDUCE
// //const sum = nums.reduce((acc, num) => acc+num,0)

// //console.log(sum)

// const votes = ['yes', 'no', 'yes', 'no', 'no']
// const tally = votes.reduce((runningTally, vote) =>{
//     runningTally[vote] = runningTally[vote] ? runningTally[vote] + 1 : 1 
//   return runningTally      
//     },
// {})
// console.log(tally)