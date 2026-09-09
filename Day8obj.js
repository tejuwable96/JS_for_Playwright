

let students=[
    {
        Firstname:"Shivansh",
        Lastname:"Wable",
        age:10,
        city:"Pune",
        skills:["python","Java"],
        Marks:50

    },
    {
        Firstname:"Swarnsh",
        Lastname:"Bidwe",
        age:11,
        city:"Baramati",
        skills:["cypress","Js"],
        Marks:100
    },

    {
        Firstname:"Suvarna",
        Lastname:"dudhal",
        age:36,
        city:"Nashik",
        skills:["data A","DS"],
        Marks:30
    },
    {
        Firstname:"Sudhir",
        Lastname:"Wable",
        age:15,
        city:"Nagar",
        skills:["dA","DS","Statastics"],
        Marks:50
    },
    {
        Firstname:"Vishwam",
        Lastname:"Bhapkar",
        age:6,
        city:"Ahilyanagar",
        skills:["AI","ML","Python"],
        Marks:40
    },
    {
        Firstname:"Vishal",
        Lastname:"More",
        age:6,
        city:"Pune",
        skills:["AI","ML","Python"],
        Marks:60
    },
]

console.log(students[0].Firstname)
console.log(students[4].Firstname)
console.log(students[4].skills[0])

//get addition of marks of each students

console.log(students[4].Marks)

//reduce

let total = students.reduce(function(acc,el,idx,arr){
    return  acc+el.Marks
},0)

console.log(total)

//  el = {
//         firstName: "jaya",
//         lastName: "kumari",
//         age: 25,
//         city: "nashik",
//         skills: ["java", "python"],
//         marks: 50
//     }
// el.marks
// acc+el.marks    


//find pass and fail students 
//filer

let passS=students.filter(function(el){
    return el.Marks>35
})
console.log(passS)

let Fails=students.filter(function(el){
    return el.Marks<=35
})
console.log(Fails)

//want to give 10 marks grace to fail students



students.filter(function(el){
    return el.Marks<=35
}).forEach(function(el){
    el.Marks=el.Marks+10
})
//console.log(students)
//------------------------------------------------------------------------------

// students.filter(function(el){
//     return el.marks<=35
// }).forEach(function(el){
//     el.marks= el.marks+10
//     if(el.marks<=35){
//         console.log(el.firstName)
//     }

students.filter(function(el){
    return el.Marks<=35
}).forEach(function(el){
    el.Marks=el.Marks+10
    if(el.Marks<=35){
        console.log(el.Firstname)
    }
})

console.log(students)