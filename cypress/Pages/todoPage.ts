export default class TodoPage{
    load(){
        cy.visit('/todo')
    }

    private get welcomeMessage(){
        return '[data-testid="welcome"]'
    }

    getWelcomeMessage(){
        return cy.get(this.welcomeMessage)
    }

    private get deleteButton(){
        return '[data-testid="delete"]'
    }
    getDeleteButton(){
        cy.get(this.deleteButton).click();
    }

    private get noTodoIcon(){
        return '[data-testid="no-todos"]'
    }

    getNoTodoIcon(){
        return cy.get(this.noTodoIcon)
    }

    private get todoItems(){
        return '[data-testid="todo-item"]'
    }
    getTodoItems(){
        return cy.get(this.todoItems)
    }
}