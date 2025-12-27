import User from "../Models/user";
import RegisterPage from "../Pages/Register";
import TodoPage from "../Pages/todoPage";

it.only('should be able to register', () =>{
    const user = new User(
        'Testing Croc',
        "On chain",
        "a103@example.com",
        '1234qwer'
    );
    const registerPage = new RegisterPage();
    registerPage.load();
    registerPage.register(user);
    const todoPage = new TodoPage()
    todoPage.getWelcomeMessage().should("be.visible");
});