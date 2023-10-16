// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        
        // make sure its a string and not empty
        if (typeof school !== 'string' || school.trim() === '') {
            throw new Error('School must be a non-empty string');
        }

        this.school = school;        
    }

    getSchool() {
        return this.school;
    }

    getRole = () =>'Intern';
}

module.exports = Intern;
