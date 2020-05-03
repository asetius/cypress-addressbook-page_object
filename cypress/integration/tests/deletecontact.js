import LoginPage from '../pages/LoginPage';
import ContactPage from '../pages/ContactPage';

const session = new LoginPage();
const contact = new ContactPage();

describe('DeleteContactTest', () => {
    it('Delete Contact-Positive', () => {
        session.login();
        contact.selectContact();
        contact.delContactButtonClick();
        contact.confirmDelContact();
        cy.get('#maintable').should('exist');
    });
});