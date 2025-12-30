export default class NewTodoPage{
    load(){
        cy.visit('/todo/new');
    }

    private get todoItemInput(){
        return '[data-testid="new-todo"]'
    }
    addTodoItem(task:string){
        cy.get(this.todoItemInput).type(task)
    }

    private get submitNewTaskButton(){
        return '[data-testid="submit-newTask"]'
    }
    SubmitButton(){
        cy.get(this.submitNewTaskButton).click()
    }
}