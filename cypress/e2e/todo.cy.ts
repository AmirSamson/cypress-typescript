import TodoApi from "../APIs/TodoApi";
import UserApi from "../APIs/UserApi";
import User from "../Models/user";
import TodoPage from "../Pages/todoPage";

it('should be able to add a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a104@example.com",
        '1234qwer'
    );
    new UserApi().register(user);
    const todoPage = new TodoPage()
    todoPage.load()
    todoPage.getTodoItems().should('contain.text', 'how to Cypress');
});



it.only('should be able to delete a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a109@example.com",
        '1234qwer'
    );

    new UserApi().register(user).then((response) =>{
        user.setToken(response.body.access_token)
        new TodoApi().addTodo(user)
    });

    const todoPage = new TodoPage()
    todoPage.load()
    todoPage.getTodoItems().should('contain.text', 'how to Cypress');
    todoPage.getDeleteButton()
    todoPage.getNoTodoIcon().should('be.visible')
    todoPage.getNoTodoIcon().should('contain.text', 'No Available Todos')
});