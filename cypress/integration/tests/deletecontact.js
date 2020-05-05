import ContactPage from '../pages/ContactPage';

const contact = new ContactPage();

describe('DeleteContactTest', () => {
    it('Delete Contact-Positive', () => {
        contact.selectContact();
        contact.delContactButtonClick();
        contact.confirmDelContact();
        cy.get('#maintable').should('exist');
    });
});