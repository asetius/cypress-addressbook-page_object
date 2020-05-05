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
        cy.fixture('groupform').then((form)  => {
            cy.get('[name="group_name"]').type(form.create.group_name);
            cy.get('[name="group_header"]').type(form.create.group_header);
            cy.get('[name="group_footer"]').type(form.create.group_footer);
        });
    }

    editGroupForm() {
        cy.fixture('groupform').then((form)  => {
            cy.get('[name="group_name"]').clear().type(form.edit.group_name);
            cy.get('[name="group_header"]').clear().type(form.edit.group_header);
            cy.get('[name="group_footer"]').clear().type(form.edit.group_footer);
        });
    }

    submitCreateGroup() {
        cy.get('[name="submit"]').click();
    }

    submitEditGroup() {
        cy.get('[name="update"]').click();
    }

    goToGroupPage() {
        cy.contains('groups').click();
    }

    returnToGroupPage() {
        cy.contains('group page').click();
    }

    selectGroup() {
        cy.get('[type="checkbox"]').first().check();
    }

}

export default GroupPage;