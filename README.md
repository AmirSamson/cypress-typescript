# Cypress E2E Testing Project

## 📌 Overview

This project is an **End-to-End (E2E) test automation framework** built with [Cypress](https://www.cypress.io/).
It follows the **Page Object Model (POM)** design pattern and leverages **Object-Oriented Programming (OOP)** principles to ensure that the codebase remains:

* **Clean** – organized structure for maintainability.
* **Stateless** – tests are independent and do not rely on one another.
* **Readable** – easy to understand, extend, and debug.

By using POMs, all UI interactions and selectors are abstracted into dedicated classes, keeping test files concise and focused on scenarios rather than implementation details.

---

## 📂 Project Structure

```
cypress/
  ├── e2e/                 # Test specifications
  ├── pages/               # Page Object Models
  ├── support/             # Commands, hooks, utilities
  └── fixtures/            # Test data & mock responses
```

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (>= 16.x)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

### 3. Running Tests

#### Run tests in interactive mode (Cypress UI)

```bash
npm run cypress:open
```

#### Run tests in headless mode

```bash
npm run cypress:run
```

#### Run specific test file

```bash
npx cypress run --spec "cypress/e2e/<test-file>.cy.js"
```

---

## 🏗️ Writing Tests

* Create a new test file inside `cypress/e2e/`.
* Use Page Objects from `cypress/pages/` to interact with elements.
* Keep tests **stateless** – each test should set up its own preconditions.

**Example:**

```javascript
import LoginPage from '../pages/LoginPage'

describe('Login Flow', () => {
  const loginPage = new LoginPage()

  it('should log in successfully with valid credentials', () => {
    loginPage.visit()
    loginPage.login('user@example.com', 'Password123')
    cy.contains('Welcome back').should('be.visible')
  })
})
```

---

## ✅ Best Practices

* Keep selectors in POM files, **not in test cases**.
* Use fixtures for test data when possible.
* Write independent and deterministic tests.
* Run tests in CI/CD for fast feedback.

---

## 📖 Resources

* [Cypress Documentation](https://docs.cypress.io/)
* [Page Object Model in Cypress](https://docs.cypress.io/examples/examples/recipes#Page-Objects)

