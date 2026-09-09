
let obj={
    fname:"Tejaswi",
    lname:"wable",
    displayName:function(){
        console.log(`name=${this.fname} ${this.lname}`)
    }
}

console.log(obj.fname)
obj.displayName()

//class and object

class person {
    fname=undefined
    lname=undefined
    displayname(){
        console.log(this.fname+" "+this.lname)
    }
}
let d1=new person()
d1.fname="Teju"
d1.lname="Bhapkar"

d1.displayname()

let p1=new person()
p1.fname="Shiv"
p1.lname="wable"
p1.displayname()

//---------------------------------------------------------------------------------------------

//constructor 
class studentinfo{
    constructor(fn,ln){
        this.fname=fn
        this.lname=ln
    }
    displayName(){
        console.log(this.fname+" "+this.lname)
    }
}
let p5=new studentinfo("Vishal","bhapkar")
p5.displayName()

//---------------------------------------------------------------------------------------------------------------

//oops concepts 

// “Inheritance allows one class to reuse properties and methods of another class.”
// Parent class → Student
// Child class → Teacher

// class Student{
//     constructor(fn,ln,dob){
//         this.fname=fn
//         this.lname=ln
//         this.dob=dob
//     }
//     displayName(){
//         console.log(this.fname + " "+this.lname)
//     }
// }

// class Teacher{
    
//     constructor(fn,ln,dob,sal){
//         this.fname=fn
//         this.lname=ln
//         this.dob=dob
//         this.salary=sal
//     }
//     displayName(){
//         console.log(this.fname + " "+this.lname)
//     }
//     displaySalary(){
//         console.log(`salary= ${this.sal}`)
//     }
// }

console.log("------------------------------------------")
//------------------------------------------------------------------------------------------------

class Student{
    constructor(fn,ln,dob){
        this.fname=fn
        this.lname=ln
        this.dob=dob
    }
    displayName(){
        console.log(this.fname + " "+this.lname)
    }
}

class Teacher extends Student{
        constructor(fn,ln,dob,sal){
        super(fn,ln,dob)
        this.salary=sal
    }
    displaySalary(){
        console.log(`salary= ${this.salary}`)
    }
}

let st = new Student("neel","chawde","10-10-2010")

let th = new Teacher("dipanshu","chawde","10-10-1999",100000)

st.displayName()
th.displayName()

//st.displaySalary()
th.displaySalary()