/// <reference types = "cypress"/>

import LoginPage from '../pages/LoginPage';
import GroupPage from '../pages/GroupPage';

const session = new LoginPage();
const group = new GroupPage();

describe('EditGroupTest', () => {
    it('Edit Group-Positive', () => {
        session.login();
        group.goToGroupPage();
        group.selectGroup();
        group.editGroupButtonClick();
        group.editGroupForm();
        group.submitEditGroup();   
        group.returnToGroupPage();
        cy.get('[name="edit"]').should('be.visible');
    });
});