// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        
        // ensuring thge github name is a string which isnt empty 
        if (typeof github !== 'string' || github.trim() === '') {
            throw new Error('GitHub username must be a non-empty string');
        }

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole = () => 'Engineer';
}

module.exports = Engineer;
