/// <reference types = "cypress"/>

import LoginPage from '../pages/LoginPage';
import GroupPage from '../pages/GroupPage';

const session = new LoginPage();
const group = new GroupPage();

describe('DeleteGroupTest', () => {
    it('Delete Group-Positive', () => {
        session.login();
        group.goToGroupPage();
        group.selectGroup();
        group.delGroupButtonClick();         
        group.returnToGroupPage();
        cy.get('[name="delete"]').should('be.visible');
    });
});