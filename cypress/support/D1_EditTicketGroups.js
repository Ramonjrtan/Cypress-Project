import env from '../../cypress.env.json';

export function edit_ticket() {
  // Step 1: Click on the second tab button
  cy.get(env.editTicket.TabButton, { timeout: 60000 })
    .should('be.visible')
    .click();

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get(env.editTicket.TabHeader, { timeout: 60000 })
    .should('contain', 'Tickets');

    cy.reload(); // Refresh the page to ensure all elements are loaded

  // Step 3: Get the search input field and clear if it's not empty
  cy.wait(5000);
  cy.get(env.editTicket.SearchInput)
    .should('be.visible')
    .then(($input) => {
      if ($input.val().trim().length > 0) {
        cy.wrap($input).clear();
      }
    })
    .type('Cypress Test Ticket');

  // Step 4: Wait for search results to appear dynamically
  cy.get(env.editTicket.Row, { timeout: 100000 }).should('have.length.greaterThan', 0);

  // Step 5: Click on the first search result safely
  cy.intercept('GET', '**/tickets?*').as('fetchTickets');
  cy.wait('@fetchTickets');
  
  cy.get(env.editTicket.Row)
    .should('have.length.above', 0);

  cy.wait(10000);

  cy.get(env.editTicket.Row).first()
    .find(env.editTicket.Link)
    .should('be.visible')
    .click();

  // Step 6: Wait until the "Ticket Details" page loads completely
  cy.waitUntil(() => 
    cy.get(env.editTicket.DetailsHeader).should('contain', 'Ticket Details'),
    { timeout: 10000, interval: 500 }
  );

  // Step 7: Short wait to ensure full page load (if necessary)
  cy.wait(2000);
}
