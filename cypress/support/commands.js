//visit mainpage and subpage 
Cypress.Commands.add('visitPage', (subPath) => {
   const baseUrl = Cypress.env('baseUrl');
   cy.visit(`${baseUrl}${subPath}`);
});
