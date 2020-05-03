/// <reference types = "cypress"/>

class ContactPage {

    goToAddNewContact() {
        cy.get('a').contains('add new').click();
    }

    delContactButtonClick() {
        cy.get('[value="Delete"]').click();
    }

    goToEditContact() {
        cy.get('#maintable > tbody > tr:nth-child(2) > td:nth-child(8) > a > img').click();
    }

    submitCreateContact() {
        cy.get('#content > form > input[type=submit]:nth-child(87)').click();
    }

    submitEditContact() {
        cy.get('#content > form:nth-child(2) > input[type=submit]:nth-child(86)').click();
    }

    selectContact() {
        cy.get('[type="checkbox"]').first().check();
    }

    fillContactForm() {
        cy.get('[name="firstname"]').type('firstname_1');
        cy.get('[name="lastname"]').type('lastname_1');
        cy.get('[name="address"]').type('Astana');
    }

    editContactForm() {
        cy.get('[name="firstname"]').clear().type('firstname_2');
        cy.get('[name="lastname"]').clear().type('lastname_2');
        cy.get('[name="address"]').clear().type('Nur-Sultan');
    }

    confirmDelContact() {
        cy.on('window:comfirm', () => {
        });
    }

    returnToHomePage() {
        cy.get('a').contains('home page').click();
    }

}

export default ContactPage;