import env from '../../cypress.env.json';

export function searchpagebcsync() {

  // Step 1: Click on the second tab button
  cy.get(env.ticketTabButton, { timeout: 60000 })
    .should('be.visible')
    .click();

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get(env.ticketTabHeader, { timeout: 60000 })
    .should('contain', 'Tickets');

cy.wait(5000); // Wait for 5 seconds to ensure the page is fully loaded
  
    //BC Sync is present in the search page
    cy.get('tbody tr:nth-child(1) td:nth-child(1) app-bc-badge:nth-child(1) div:nth-child(1) span:nth-child(1)').should('be.visible')
    .and('contain', 'BC Synced')
}