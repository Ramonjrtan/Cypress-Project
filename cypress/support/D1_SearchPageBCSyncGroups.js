import env from '../../cypress.env.json';

export function searchpagebcsync() {

  // Step 1: Click on the second tab button
  cy.get(env.editTicket.TabButton, { timeout: 60000 })
    .should('be.visible')
    .click();

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get(env.editTicket.TabHeader, { timeout: 60000 })
    .should('contain', 'Tickets');

cy.wait(5000); // Wait for 5 seconds to ensure the page is fully loaded
  
    //BC Sync is present in the search page
    cy.get(env.bcSync.SearchPageSync).should('be.visible')
    .and('contain', 'BC Synced')
}