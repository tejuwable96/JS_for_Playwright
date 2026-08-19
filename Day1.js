//Arrays
//index        0    1       2       3       4         5
let names=["Ram","Raja","Teja","Sudhir","Veera","shivansh"]
// console.log(names)
// console.log(names[0])
// //console.log(names[-1])  //undefined index PVE

// console.log(names.at(-1))  //suport negative indexing 
// console.log(names.length)  //length of array  
// console.log(names[names.length-1]) //fetch last element of array
// console.log(names[5])

//Loop on Array
//1.For Loop
// for(let i=0;i<names.length;i++){
//     console.log(names[i])
// }

// for(let name of names){
//     console.log(name)
// }

// for(let i=0;i<names.length;i++){
//     console.log(i,names[i])
// }


// //2 foreach loop
// names.forEach(function(name){
//     console.log(name)
// })
//////////

// names.forEach((name)=>{
//     console.log(name)

// })

//while loop
// let X=0
// while(X<names.length){
//     console.log(names[X])
//     X++
// }


console.log("-----------------------------------------")
console.log(typeof(names))

///// object ==> propeties 
// methods ==> action ,return

//person 
//properties==> name, weight, color .....
//walk(), talk()...

//walk()==> distance cover ==> weight reduce 


//array ==>object 
//properties ==>length
//methods ==>push(),pop()

let nums=[11,22,33,44,55,66]

//push -push ele at end 
// console.log(nums)

// let q1=nums.push("aa")
// console.log(nums)
// console.log(q1)  //view push value

// //pop-delete last ele from array
// let q2=nums.pop()
// console.log(nums)
// console.log(q2)

// q2=nums.pop()
// console.log(nums)
// console.log(q2) //show pop element value in array

// // unshift-insert element in forent of array 
let q3=nums.unshift("bb")
console.log(nums)
console.log(q3)

//shift-remove first element from array
let q4=nums.shift()
console.log(nums)
console.log(q4)

nums.reverse();
console.log(nums)

//concat 
A=['a','b','c']
B=[22,33,44,55]
let C= A.concat(B)
console.log(C)

let q5=B.concat(A)
console.log(q5)

//join()=convert array in to string
let n1=["teja","veera","raj","shiv"]

let q6=n1.join("_")
console.log(q6)   //  teja_veera_raj_shiv

//flat()
//         0    1     2
//       0  1  0  1  0  1
let x1=[[1,2],[2,3],[3,4]]

console.log(x1[0])
console.log(x1[0][0])
console.log(x1[2][0])

let q7=x1.flat()
console.log(q7)
//index of-show value index 
   //  0   1  2  3
let x2=[44,55,7,88,9]
console.log(x2.indexOf(9))  //4

//at()-display index value
console.log(x2.at(2))

console.log(x2.at(3))