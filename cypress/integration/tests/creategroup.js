import GroupPage from '../pages/GroupPage';

const group = new GroupPage();

describe('CreateGroupTest', () => {
    it('Create Group-Positive', () => {
        group.goToGroupPage();
        group.newGroupButtonClick();
        group.fillGroupForm();
        group.submitCreateGroup();    
        group.returnToGroupPage();
        cy.get('[name="new"]').should('be.visible');
    });
});