/// <reference types = "cypress"/>

class ContactPage {

    goToAddNewContact() {
        cy.contains('add new').click();
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
        cy.fixture('contactform').then((form)  => {
            cy.get('[name="firstname"]').type(form.create.firstname);
            cy.get('[name="lastname"]').type(form.create.lastname);
            cy.get('[name="address"]').type(form.create.address);
        });
    }

    editContactForm() {
        cy.fixture('contactform').then((form)  => {
            cy.get('[name="firstname"]').clear().type(form.edit.firstname);
            cy.get('[name="lastname"]').clear().type(form.edit.lastname);
            cy.get('[name="address"]').clear().type(form.edit.address);
        });
    }

    confirmDelContact() {
        cy.on('window:comfirm', () => {
        });
    }

    returnToHomePage() {
        cy.contains('home page').click();
    }

}

export default ContactPage;