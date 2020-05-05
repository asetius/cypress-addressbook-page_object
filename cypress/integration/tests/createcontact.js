import ContactPage from '../pages/ContactPage';

const contact = new ContactPage();

describe('CreateContactTest', () => {
    it('Create Contact-Positive', () => {
        contact.goToAddNewContact();
        contact.fillContactForm();
        contact.submitCreateContact();
        contact.returnToHomePage();
        cy.get('#maintable').should('exist');
    });
});