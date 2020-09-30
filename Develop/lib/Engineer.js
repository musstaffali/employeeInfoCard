// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name,id,email)
        this.github = github
    }
       getGithub (){
            return this.github;
        }
        getRole(){
            return "Engineer"
        }
    

}

module.exports = Engineer
// function Engineer(name, id, email, github) {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.github = github;
//     this.getRole = function() {
//         return this.constructor.name;
//     }
// }

// const employee1 = new Engineer("Bob", 1, "Bob@email.com", "bob");

// module.export = Engineer;