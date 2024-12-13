import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the Simple Form page', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-form');
});

When('I fill out the form with valid details', () => {
  cy.get('#firstName').type('Praveen');
  cy.get('#lastName').type('Maurya');
  cy.get('#email').type('praveenkushwaha0468@gmail.com.com');
  cy.get('#number').type('7309647468');
  cy.get('#message').type('Automated test message via Cypress.');
  cy.get('button[type="submit"]').click();
});

Then('I should see a confirmation message', () => {
  cy.get('#message').should('contain.text', 'Thank you');
});
