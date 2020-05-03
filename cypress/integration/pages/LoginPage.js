/// <reference types = "cypress"/>

class LoginPage {
    visit() {
        cy.visit('http://localhost/addressbook/');
    }

    fillUser(value) {
        const field = cy.get('[name="user"]');
        field.type(value);
        return this;
    }

    fillPassword(value) {
        const field = cy.get('[name="pass"]');
        field.type(value);
        return this;
    }

    submit() {
        const button = cy.get('[type="submit"]');
        button.click();
    }

    login() {
        const login = new LoginPage();
        login.visit();
        login.fillUser('admin');
        login.fillPassword('secret');
        login.submit();
    }

}

export default LoginPage;