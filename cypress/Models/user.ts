export default class User{
    private firstName: string
    private lastName: string
    private email: string
    private password: string

    constructor(
        firstName: string, 
        lastName: string, 
        email: string, 
        password: string)
        {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    getFirstName(){return this.firstName}
    getLastName(){return this.lastName}
    getEmail(){return this.email}
    getPassword(){return this.password}
}