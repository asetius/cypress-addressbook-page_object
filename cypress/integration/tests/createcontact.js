import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';

const session = new LoginPage();
const contact = new ContactPage();

describe('CreateContactTest', () => {
    it('Create Contact-Positive', () => {
        session.login();
        contact.goToAddNewContact();
        contact.fillContactForm();
        contact.submitCreateContact();
        contact.returnToHomePage();
        cy.get('#maintable').should('exist');
    });
});