/// <reference types="Cypress" />


describe("Test", () => {

    beforeEach(() => {

        //visit the web
        cy.visit('https://cocktailale.web.app/getStarted')
    })

    it("check 404 error", () => {

        //enter credentials
        cy.get('#email').type('usertest123123@asd.com')
        cy.get('#password').type('password123123')

        //click submit
        cy.get('.d-flex > .btn').click()

        //check 404 error
        cy.request(
            {
                url: 'https://murmuring-ravine-01051.herokuapp.com/api/auth',
                failOnStatusCode: false
            })
            .should((response) => {
                expect(response.status).to.eq(404)
            })

    });

    it("Check error messages", () => {

        //check email error
        cy.get('#email').type('usertest123123')
        cy.get('.text-danger').first().contains('"Email" must be a valid email')

        //check pass error
        cy.get('#password').type('pass')
        cy.get('.text-danger').last().contains('"Password" length must be at least 6 characters long')
    })


});


//alex.raygorodsky@dynamicyield.com