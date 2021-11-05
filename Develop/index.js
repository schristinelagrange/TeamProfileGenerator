const inquirer = require("inquirer");
const fs = require("fs");



const input = [
    
    {
        type: "input",
        message: "Team Manager Name:",
        name: "name",
    },
    
];

function demo() {
    const employee = new Manager("kiki", 123, "thisismyemail")
console.log(employee.getRole())
}

class Employee2 {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }
        
    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }

    
}

class Manager extends Employee2 {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager" 
    }





};







function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => { 
        if (err) { 
            return console.log (Error);} 

    })
};


function init() {
    inquirer.prompt(input)
    .then(function(input) {
        console.log(input.name);
    const manager = new Manager(input.name)
        console.log(manager)
    })
};


init();