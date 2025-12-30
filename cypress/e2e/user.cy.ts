import User from "../Models/user";
import RegisterPage from "../Pages/RegisterPage";
import TodoPage from "../Pages/todoPage";

describe('todo test cases', ()=>{
    let user: User;
    let registerPage: RegisterPage;
    let todoPage: TodoPage;

    beforeEach(() =>{
    user = new User(
        'Testing Croc',
        "On chain",
        "b103@example.com",
        '1234qwer'
    );
    registerPage = new RegisterPage();
    todoPage = new TodoPage()
    })

    it.only('should be able to register', () =>{
    registerPage.load();
    registerPage.register(user);
    todoPage.getWelcomeMessage().should("be.visible");
    });
})
