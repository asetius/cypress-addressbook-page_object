import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';

const session = new LoginPage();
const contact = new ContactPage();

describe('EditContactTest', () => {
    it('Edit Contact-Positive', () => {
        session.login();
        contact.goToEditContact();
        contact.editContactForm();
        contact.submitEditContact();
        contact.returnToHomePage();
        cy.get('#maintable').should('exist');
    });
});