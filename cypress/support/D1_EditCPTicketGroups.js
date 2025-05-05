import env from '../../cypress.env.json';

export function edit_cpticket() {
  // Step 1: Click on the second tab button
  cy.get(env.ticketTabButton, { timeout: 60000 })
    .should('be.visible')
    .click();

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get(env.ticketTabHeader, { timeout: 60000 })
    .should('contain', 'Tickets');

  // Step 3: Get the search input field and clear if it's not empty
  cy.get('@cpTicketNumber').then((ticketNum) => {
    // Use ticketNum for further assertions
  
    // Step 3: Get the search input field and clear if it's not empty
    cy.wait(5000);
    cy.get(env.ticketSearchInput)
      .should('be.visible')
      .then(($input) => {
        if ($input.val().trim().length > 0) {
          cy.wrap($input).clear();
        }
      })
      .type(ticketNum); // Use ticketNum here
  });

  // Step 4: Wait for search results to appear dynamically
  cy.get(env.ticketRow, { timeout: 30000 }).should('have.length.greaterThan', 0);

  // Step 5: Click on the first search result safely
  cy.intercept('GET', '**/tickets?*').as('fetchTickets');
  cy.wait('@fetchTickets');
  
  cy.get(env.ticketRow)
    .should('have.length.above', 0);
  cy.wait(3000);

  cy.get(env.ticketRow).first()
    .find(env.ticketLink)
    .should('be.visible')
    .click();

  // Step 6: Wait until the "Ticket Details" page loads completely
  cy.waitUntil(() => 
    cy.get(env.ticketDetailsHeader).should('contain', 'Ticket Details'),
    { timeout: 10000, interval: 500 }
  );

  // Step 7: Short wait to ensure full page load (if necessary)
  cy.wait(2000);

    // Step 8: Click on Email tab
    cy.get(env.buyTabIcon)
    .contains('mail')
    .should('be.visible')
    .click();

    //Stetp 9: Wait until the page loads completely
    cy.contains(env.ticketEmailLabel, 'No Conversation Selectedail', { timeout: 10000 })
      .should('be.visible');


}
