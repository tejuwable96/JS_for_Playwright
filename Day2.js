//sclice
///         0       1         2       3          4         5        6
let city=["pune","nagpur","nagar","Rajasthan","Gujarat","jalana","mumbai"]
///           -6           -5          -4          -3      -2       -1

///slice(start index, end index not included)
// let q1=city.slice(0,5)
// console.log(city)
// console.log (q1)   //[ 'pune', 'nagpur', 'nagar', 'Rajasthan', 'Gujarat' ]
 
// let q2=city.slice(1,5)
// console.log(city)
// console.log(q2)   //[ 'nagpur', 'nagar', 'Rajasthan', 'Gujarat' ]

// let q3=city.slice(2)
// //console.log(city)
// console.log(q3)     ///[ 'nagar', 'Rajasthan', 'Gujarat', 'jalana', 'mumbai' ]

// let q4=city.slice(4,1)
// //console.log(city)
// console.log(q4)      //[]

// let q5=city.slice(2,4)
// console.log(q5)      //[ 'nagar', 'Rajasthan' ]

///
// //         0        1        2         3        4        5         6  
let city1=["pune","mumbai","nagpur","nashik","banglore","jaipur","kolkota"]
// //           -7    -6        -5      -4      -3          -2            -1

// let q11=city1.slice(-6,-1)
// console.log(q11)          //[ 'mumbai', 'nagpur', 'nashik', 'banglore', 'jaipur' ]

// let q21=city1.slice(-3,-6)
// console.log(q21)  //[]

// let q41=city1.slice(-3,6)
// console.log(q41)          //[ 'banglore', 'jaipur' ]

// let q51=city1.slice(5,-3)
// console.log(q51)          //[]

// splice()
// syntax => splice(startIndex, deleteCount, item1, item2, ...)
// action => removes elements from the array starting at startIndex and optionally inserts new elements
// return => array of deleted elements (original array gets updated)

//               from where   how many              replace by 1,2,3....

//animals.splice(index,numberOfElmentstoBeDeleted,rep1,rep2)

//               0        1      2        3       4        5
let animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]

// let q22=animals.splice(1,2)
// console.log(q22)       //[ 'lion', 'wolf' ]


//    let q26 = animals.splice(1,2,111,222)
//    console.log(animals)       //[ 'tiger', 111, 222, 'camel', 'rabbit', 'snake' ]
//    console.log(q26)        //[ 'lion', 'wolf' ]

   let q2 = animals.splice(1,2,111,222,333)
   console.log(animals) 
//    //[
//   'tiger', 111,
//   222,     333,
//   'camel', 'rabbit',
//   'snake'
// ]
   console.log(q2)  //[ 'lion', 'wolf' ]


   let q33 = animals.splice(1,2,111)
console.log(animals)
console.log(q33)  //[ 111, 222 ]

//// fill()
// syntax => fill(value, startIndex?, endIndex?)  // endIndex not included
// action => fills array elements with the given value from startIndex to before endIndex
// return => updates the existing array

//           0  1  2  3  4  5
let num2 = [11,22,33,44,55,66]

num2.fill('abc',2,5)
console.log(num2)

num2.fill(undefined,2,5)
console.log(num2)

//sort()

city3=["pune","mumbai","nagpur","nashik","banglore","jaipur","kolkota","amravati","amdabad"]
console.log(city3.sort())

// let nums=[55,77,90,23,78,100,1,2,-8]
// console.log(nums.sort())