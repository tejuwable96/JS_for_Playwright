//array
//object-key value pair
let infoa=["neel","shiv","ram",11,22,["teja","vicky"]]
console.log(infoa)
console.log(infoa[0])
infoa.push(111)
console.log(infoa)
infoa.pop()
console.log(infoa)
infoa[0]="RamRaj"
console.log(infoa)

let info={
    firstname:"Tejaswi",
    lastname:"Wable",
    rollnumber:24,
    age:34,
    ispass:true,
    marks:[35,22,50,60]
}
//dot notation
console.log(info)
console.log(info.firstname)
console.log(info.marks)
console.log(info.marks[1])

//brackt notation
console.log(info["lastname"])
console.log(info["marks"])
console.log(info["marks"][0])

//update using dot notation

info.firstname="Shivansh"
console.log(info)
info.middleName="Vicky"
console.log(info)

//update using brackt notation
info["rollnumber"]=99
console.log(info)
info["language"]="Marathi"
console.log(info)

//loop on object
for(let k in info){
   // console.log(k)
    //console.log(info.k)
    //console.log(info[k])
    console.log(`${k}=${info[k]}`)
}
