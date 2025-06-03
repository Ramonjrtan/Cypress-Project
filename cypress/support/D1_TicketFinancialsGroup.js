import env from '../../cypress.env.json';

export function ticket_financials() {
  const expectedPrice = '$60.00';
  cy.reload(); // Refresh the page to ensure all elements are loaded
    // Step 6: Verify detail-level financials
  cy.get('app-detail-node[title="Total Price"] div', { timeout: 60000 })
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.eq(expectedPrice);
    });

  cy.get('app-detail-node[title="Total Authorized Cost"] div')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.eq(expectedPrice);
    });

cy.visit('https://core.dispatch1.com/delivery/contract-detail/client/10001/contract/2706/tickets');

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
    .should('be.visible');


  // Step 5: Verify table-level financials
  cy.get(':nth-child(1) > [headers="table-header-0-8-1"]', { timeout: 60000 })
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.eq(expectedPrice);
    });

  cy.get(':nth-child(1) > [headers="table-header-0-9-1"]')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.eq(expectedPrice);
    });


}
