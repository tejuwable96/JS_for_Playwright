//destructuring  (unpacking values from arrays or objects into variables)
// Destructuring is a JavaScript feature that allows you to extract values from 
// arrays or objects and store them into variables in a clean and readable way.
// Instead of accessing values one by one, destructuring lets you do it in a single line.

//program 1
let names = ['dipanshu','nitin','neel','tanish']

let a=names[0]
let b=names[1]
let c=names[2]
let d=names[3]

console.log(a)
//destructuring  (unpacking values from arrays or objects into variables)
let [a1,a2,a3,a4,a5]=names
console.log(a1)
console.log(a5)  //no value assign so display undefined


let names1=["shyam","radha","krushna","Gurav"]
let a11=names1[0]
let b1=names1[1]
let c1=names1[2]
let d1=names1[3]
console.log(a11)
//destructuring  (unpacking values from arrays or objects into variables)
let [a111,b11,c11,d11]=names1
console.log(names1)
//---------------------------------------------------------------------------

let info={
    firstname:"Tejaswi",
    lastname:"Wable"
}

let {firstname,lastname}=info
console.log(info)   //{ firstname: 'Tejaswi', lastname: 'Wable' }

let {firstname:fn,lastname:ln}=info
console.log(fn)
console.log(ln)

let info2={
    firstname:"shivansh",
    lastname:"wable",
    age:10,
    parents:{
        mother:"Teja",
        father:"Sudhir"
    }
}

let {firstname:fname,lastname:lname,age:age1,parents:{mother:mom,father:father}}=info2
// console.log(info2)
// console.log(mom)

//rest and spread operator

//rest, spread operator

//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

let x=[10,20,30,40,50]
let y=[11,22,33,66,77]
let cc=[...x,...y]  //  combine in one array
console.log(cc)   
let cT=[x,y]
console.log(cT)   //[ [ 10, 20, 30, 40, 50 ], [ 11, 22, 33, 66, 77 ] ]

let p=[10,20,30,40]
let q=[100,200,300,400]
let r=[1000,2000,3000,400]
// o/p=
// xx=[10,100,1000,20,200,2000,30,300,3000,40,400,40000]
 let xx=[]  //empty array
 for(let i=0;i<p.length;i++){
    xx=xx.concat(p[i],q[i],r[i])
 }
console.log(xx)


let info11={
    name:"Vishal",
    surname:"bhapkar"
}

let info12={
    fname:"veera",
    surname:"Wable"
}

let allinfo={...info11,...info12}
console.log(allinfo)

let nums=[12345,11,22,33,44,55,66]
// x=1234
// y=[11,22,33,44,55,66]

let [x1,...y1]=nums
console.log(x1)
console.log(y1)

//-------------------------------------------------------------------------------------------------------
names = ['xyz','abc','dipanshu','nitin','neel','tanish']

// let [d1,...d2]=names
// console.log(d1)
// console.log(d2)

let [d21,d2,...d3]=names
console.log(d1)
console.log(d2)
console.log(d3)

//----------------------------------------------------------------------------------------------------------

let info3 = {
    location : "pune",
    marks : 90,
    name :"dipanshu",
    surname : "chawde"
}

let {location,marks,...restInfo}=info3
console.log(restInfo)
console.log(location)
