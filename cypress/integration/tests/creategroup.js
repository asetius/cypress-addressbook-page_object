/// <reference types = "cypress"/>

import LoginPage from '../pages/LoginPage';
import GroupPage from '../pages/GroupPage';

const session = new LoginPage();
const group = new GroupPage();

describe('CreateGroupTest', () => {
    it('Create Group-Positive', () => {
        session.login();
        group.goToGroupPage();
        group.newGroupButtonClick();
        group.fillGroupForm();
        group.submitCreateGroup();    
        group.returnToGroupPage();
        cy.get('[name="new"]').should('be.visible');
    });
});