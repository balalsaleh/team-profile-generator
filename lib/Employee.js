// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        // // check if its a string and remove whitespaces/trim
        // if (typeof name !== 'string' || name.trim() === '') {
        //     throw new Error('Name must be a non-empty string');
        // }

        // // cant be empty string
        // if (id.trim() === '') {
        //     throw new Error('ID must be a positive number');
        // }

        // // check if its a proper email via using the validate Email method
        // if (!validateEmail(email)) {
        //     throw new Error('Email must be a valid email address');
        // }

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name; 
    }

    getId() {
        return this.id; 
    }

    getEmail() {
        return this.email;
    }

    getRole = () => 'Employee';
}

// // this method takes email to check if its valid using regex 
// function validateEmail(email) {
//     // this is a basic email validation using a regular expression
//     /*
//     one or more alphanumeric characters, periods (.), underscores (_), 
//     or hyphens (-). The ^ symbol at the beginning of the pattern 
//     ensures that the match starts at the beginning of the string.

//     @ part for the @ in an email address!!!

//     domain part [a-zA-Z]+ allows only one or more alphabetical characters   

//     then a . for the dot 

//     then letters lower or upper case with the ability to add . so .com or .co.uk
//     */
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z.]+$/;
//     return emailPattern.test(email);
// }

module.exports = Employee;