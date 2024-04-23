#!/usr/bin/env node

import chalk from "chalk"
import inquirer from "inquirer"
interface dataOrder{
    studentName:string,
    studentRoll:number,
    studentClass:number,
    studentSection: 'A' | 'B' | 'C'   
}
let data= await inquirer.prompt([{
    type:"input",
    name:"studentName",
    message: chalk.magenta("STUDENT NAME : ")
},{
    type:"number",
    name:"studentClass",
    message:"STUDENT CLASS : "
},{
    type:"number",
    name:"studentRoll",
    message:chalk.magenta("STUDENT ROLL NO.: ")

},{
    type:"rawlist",
    name:"studentSection",
    message: chalk.white("STUDENT SECTION : "),
    choices:["A","B","C"]
}])

let list:any[] = []
list.push(data)

while(data){
let option = await inquirer.prompt ({
    type : "rawlist",
    name:"options",
    message:chalk.magenta("SELECT :"),
    choices:["ADD","REMOVE","FIND","VIEW ALL"]
})
if(option.options==="VIEW ALL"){
    console.log(list)
}if(option.options==="ADD"){
    let a:dataOrder= await inquirer.prompt([{


        type:"number",
        name:"studentClass",
        message: chalk.magenta("STUDENT CLASS : ")
}
    ,{
        type:"number",
        name:"studentRoll",
        message: "STUDENT ROLL NO.: "
    
    },{
        type:"rawlist",
        name:"studentSection",
        message:chalk.magenta("STUDENT SECTION : "),
        choices:["A","B","C"]
    }])
    list.push(a)
}if(option.options==="FIND"){
    let find = await inquirer.prompt({
        type:"input",
        name:"finds",
        message: chalk.gray("ENTER ROLL NO. TO FIND")
    })
    if(find.finds){
        let ab = list.find(student=>student.studentRoll==find.finds)
        console.log(ab)
    }else{
        console.log(chalk.red(`STUDENT NOT FOUND!`))
     }
}   
if(option.options ==="REMOVE"){
    //making functions instead
    let REmove = await inquirer.prompt({
        type:"input",
        name:"Remove",
        message:  chalk.gray("TYPE STUDENT NAME")
    })

    function remove(studentName:string){
        let aj = list.indexOf(studentName)
        list.splice(aj,1)
    }
    remove(REmove.Remove)
}
}




















console.log(data)