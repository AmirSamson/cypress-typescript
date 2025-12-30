import TodoApi from "../APIs/TodoApi";
import User from "../Models/user";
import NewTodoPage from "../Pages/NewTodoPage";
import RegisterPage from "../Pages/RegisterPage";
import TodoPage from "../Pages/todoPage";

it('should be able to add a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a154@example.com",
        '1234qwer'
    );
    const registerPage = new RegisterPage()
    registerPage.RegisterUsingApi(user);
    const newTodoPage = new NewTodoPage();
    newTodoPage.load();
    newTodoPage.addTodoItem("how to Cypress");
    newTodoPage.SubmitButton();
    const todoPage = new TodoPage()
    todoPage.getTodoItems().should('contain.text', 'how to Cypress');
});



it('should be able to delete a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "b500@test.com",
        '1234qwer'
    );
    const registerPage = new RegisterPage()
    registerPage.RegisterUsingApi(user).then((response) =>{
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