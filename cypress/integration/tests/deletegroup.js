import GroupPage from '../pages/GroupPage';

const group = new GroupPage();

describe('DeleteGroupTest', () => {
    it('Delete Group-Positive', () => {
        group.goToGroupPage();
        group.selectGroup();
        group.delGroupButtonClick();         
        group.returnToGroupPage();
        cy.get('[name="delete"]').should('be.visible');
    });
});