export default class NewTodoPage{
    load(){
        cy.visit('/todo/new');
    }

    private get todoItemInput(){
        return '[data-testid="new-todo"]'
    }
    addTodoItem(){
        cy.get(this.todoItemInput).type('how to Cypress')
    }

    private get submitNewTaskButton(){
        return '[data-testid="submit-newTask"]'
    }
    SubmitButton(){
        cy.get(this.submitNewTaskButton).click()
    }
}