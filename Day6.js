let n="Tejaswi Wable"
console.log(n)
console.log(n.length)

let fn="shivansh"
let Ln="wable"

console.log(`my first name ${fn} and my last name is ${Ln}`)
console.log ("my name is "+fn+" and my sir name is "+Ln+" ")

let city="  Pune   "
console.log(city.trimEnd())
console.log(city.trimStart())
console.log(city.trim())

let city1= "NagPur"
console.log(city1.toUpperCase())
console.log(city1.toLowerCase())

let nm="Tejaswi Sudhir Wable"

console.log(nm.includes("su"))
console.log(nm.includes("Te"))
console.log(nm.indexOf("W"))
console.log(nm.startsWith("Su"))
console.log(nm.charAt(0))
console.log(nm.endsWith("e"))
console.log(nm.charCodeAt(0))


// padEnd()
    //(method) String.padEnd(maxLength: number, fillString?: string | undefined): string

//padStart()    
//(method) String.padStart(maxLength: number, fillString?: string | undefined): string

let a= "pune"
console.log(a.padStart(10,"-"))
console.log(a.padStart(10,0))

console.log(a.padEnd(10,"-"))

let bm="Mumbai"
console.log(bm.padEnd(6,0))
console.log(bm.padEnd(6,"="))


//join
let b=[11,22,33]
console.log(b.join("=="))
let ba=[100,200,300]
console.log(ba.join("**"))

//split

nm3 = "Tejaswi@Sudhir@wable"
console.log(nm3.split("@"))

let str = "20/-rs"      //["20","-rs"]
console.log(str.split("/")[0])

//replace 
let str2 = "i am learning java and java is easy to go language"

console.log(str2.replace("java","python"))

console.log(str2.replaceAll("java","python"))

let str3 = "Tejaswi"
console.log(str3.split("").reverse().join(""))