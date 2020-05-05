import ContactPage from '../pages/ContactPage';

const contact = new ContactPage();

describe('EditContactTest', () => {
    it('Edit Contact-Positive', () => {
        contact.goToEditContact();
        contact.editContactForm();
        contact.submitEditContact();
        contact.returnToHomePage();
        cy.get('#maintable').should('exist');
    });
});