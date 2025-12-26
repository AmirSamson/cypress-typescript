import User from "../Models/user";
export default class UserAPI{

    register(user: User){
        return cy.request({
            method: "POST",
            url: '/api/v1/users/register' ,
            body:{
            email: user.getEmail(),
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            password: user.getPassword(),
            },
        });
    }
}