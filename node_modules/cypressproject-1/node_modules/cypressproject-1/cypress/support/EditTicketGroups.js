export function edit_ticket() {
  // Step 1: Click on the second tab button
  cy.get('fieldflow-tab:nth-child(2) button', { timeout: 60000 })
    .should('be.visible')
    .click();

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get('div.title-content h3', { timeout: 60000 })
    .should('contain', 'Tickets');

  // Step 3: Get the search input field and clear if it's not empty
  cy.wait(5000);
  cy.get('input[placeholder="Search"]')
    .should('be.visible')
    .then(($input) => {
      if ($input.val().trim().length > 0) {
        cy.wrap($input).clear();
      }
    })
    .type('Cypress Test Ticket');
    // .type('{enter}');

  // Step 4: Wait for search results to appear dynamically
  cy.get('tbody tr', { timeout: 30000 }).should('have.length.greaterThan', 0);

  // Step 5: Click on the first search result safely
  cy.intercept('GET', '**/tickets?*').as('fetchTickets');
  cy.wait('@fetchTickets');
  
  cy.get('tbody tr')
    .should('have.length.above', 0);
  
  cy.get('tbody tr').first()
    .find('td[headers="table-header-0-2-2"] a')
    .should('be.visible')
    .click();
  

  // Step 6: Wait until the "Ticket Details" page loads completely
  cy.waitUntil(() => 
    cy.get('div.header-wrapper h1').should('contain', 'Ticket Details'),
    { timeout: 10000, interval: 500 }
  );

  // Step 7: Short wait to ensure full page load (if necessary)
  cy.wait(2000);
}
