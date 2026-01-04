import TodoApi from "../APIs/TodoApi";
import User from "../Models/user";
import NewTodoPage from "../Pages/NewTodoPage";
import RegisterPage from "../Pages/RegisterPage";
import TodoPage from "../Pages/todoPage";

describe('to do the test cases', ()=>{

    let user: User;
    let registerPage: RegisterPage;
    let newTodoPage: NewTodoPage;
    let todoPage: TodoPage;

    beforeEach(()=>{
        user = new User(
        'Testing Croc',
        "On chain",
        "d100@test.com",
        '1234qwer'
    );
        newTodoPage = new NewTodoPage();
        todoPage = new TodoPage()
        registerPage = new RegisterPage()
        registerPage.RegisterUsingApi(user).then((response) =>{
            user.setToken(response.body.access_token)
        });
    })

it('should be able to add a todo', ()=>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a155@example.com",
        '1234qwer'
    );
    registerPage.RegisterUsingApi(user);
    newTodoPage.load();
    newTodoPage.addTodoItem("how to Cypress");
    newTodoPage.SubmitButton();
    todoPage.getTodoItems().should('contain.text', 'how to Cypress');
});

it.only('should be able to delete a todo', ()=>{
    new TodoApi().addTodo(user)
    todoPage.load()
    todoPage.getTodoItems().should('contain.text', 'how to Cypress');
    todoPage.getDeleteButton()
    todoPage.getNoTodoIcon().should('be.visible')
    todoPage.getNoTodoIcon().should('contain.text', 'No Available Todos')
});
})