//map, filter , reduce, forEachS
//some , every, find , findIndex

//1
let byear=[1990,2020,2025,1983,2000]
let age=[] 
for(let i=0;i<byear.length;i++){
    age.push(2026-byear[i])          //2026-by[0]
}
console.log(age)          //[ 36, 6, 1, 43, 26 ]

//2 find age 
let byear1=[1990,2020,2025,1983,2000,2001]
let age1=[]   //declear empty array
for(let i=0;i<byear1.length;i++){
age1.push(2026-byear1[i]) //current year-array 
}
console.log(age1);    //[ 36, 6, 1, 43, 26, 25 ]

//map
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

//el == element
//index ==> index of element

let age21 =byear.map(function(el,index,arr){
    return 2026-el
})
console.log(age21)

//2
let age11=byear1.map(function(el,index,arr){
    return 2026-el
})


let nums=[11,22,33,44,55,66]
let narr=[]
for(let i=0;i<nums.length;i++){
    narr.push(nums[i]+100)
}
console.log(narr)    //[ 111, 122, 133, 144, 155, 166 ]

let numarr2=nums.map(function(el){
    return 100+el
})
console.log(numarr2) ///[ 111, 122, 133, 144, 155, 166 ]