import GroupPage from '../pages/GroupPage';

const group = new GroupPage();

describe('EditGroupTest', () => {
    it('Edit Group-Positive', () => {
        group.goToGroupPage();
        group.selectGroup();
        group.editGroupButtonClick();
        group.editGroupForm();
        group.submitEditGroup();   
        group.returnToGroupPage();
        cy.get('[name="edit"]').should('be.visible');
    });
});