/// <reference types = "cypress"/>

class GroupPage {

    newGroupButtonClick() {
        cy.get('#content > form > input[type=submit]:nth-child(1)').click();
    }

    delGroupButtonClick() {
        cy.get('#content > form > input[type=submit]:nth-child(2)').click();
    }

    editGroupButtonClick() {
        cy.get('#content > form > input[type=submit]:nth-child(3)').click();
    }

    fillGroupForm() {
        cy.get('[name="group_name"]').type('name_1');
        cy.get('[name="group_header"]').type('header_1');
        cy.get('[name="group_footer"]').type('footer_1');
    }

    editGroupForm() {
        cy.get('[name="group_name"]').clear().type('name_2');
        cy.get('[name="group_header"]').clear().type('header_2');
        cy.get('[name="group_footer"]').clear().type('footer_2');
    }

    submitCreateGroup() {
        cy.get('[name="submit"]').click();
    }

    submitEditGroup() {
        cy.get('[name="update"]').click();
    }

    goToGroupPage() {
        cy.get('a').contains('groups').click();
    }

    returnToGroupPage() {
        cy.get('a').contains('group page').click();
    }

    selectGroup() {
        cy.get('[type="checkbox"]').first().check();
    }

}

export default GroupPage;