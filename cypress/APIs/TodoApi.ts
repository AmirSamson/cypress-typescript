import User from "../Models/user";

export default class TodoApi{

    addTodo(user: User){
        //moved the 'cy.request' inside the "then" since in CYPRESS we don't have the 'Await' that we had in Playwright. 
        // that is why we need to put this cy.requset inside so that the Token is put in `Bearer ${token} after it was created.
            cy.request({
            method:"POST",
            url: 'https://todo.qacart.com/api/v1/tasks',
            body:{
                isCompleted: false,
            item: "how to Cypress"
            },
            headers:{
                authorization: `Bearer ${user.getToken()}`
            }
        });
    }
}

