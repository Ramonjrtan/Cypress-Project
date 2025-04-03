export function add_ticket() {
  // Step 1: Click on the Tickets tab and wait for it to be visible
  cy.get('fieldflow-tab:nth-child(2) button', { timeout: 60000 })
    .should('be.visible')
    .click();

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get('div.title-content h3', { timeout: 60000 })
    .should('contain', 'Tickets');

  // Step 3: Wait until the "Add Ticket" button is enabled and clickable
  cy.get('fieldflow-button.ng-star-inserted button.primary', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');

  // Step 4: Click on "Add Ticket" button
  cy.get('fieldflow-button:nth-child(2) button', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 5: Handle Modal Appearance
  cy.get('fieldflow-dialog', { timeout: 20000 })
    .should('exist')
    .and('be.visible');

  cy.get('fieldflow-dialog').within(() => {
    // Ensure "Ticket Title" input field is visible before interacting
    cy.contains('mat-label', 'Ticket Title').click(); // Click the label first

    cy.get('input[placeholder="Ticket Title"]')
      .should('be.visible')
      .then(($input) => {
        if ($input.val().trim().length > 0) {
          cy.wrap($input).clear();
        }
      })
      .type('Cypress Test Ticket');

    // Step 6: Store text from the Ticket Title input
    cy.get('input[placeholder="Ticket Title"]').invoke('val').as('TicketName');

    // Step 7: Wait until the "Save" button is enabled before clicking
    cy.waitUntil(() => 
      cy.get('div.actions button.primary.ng-star-inserted')
        .first()
        .should('be.enabled'),
      { timeout: 10000, interval: 500 }
    );

    // Step 8: Click the Save button safely
    cy.get('div.actions button.primary.ng-star-inserted')
      .first()
      .should('be.visible')
      .click();
  });

  // Step 9: Verify "Saved Successfully" message appears
  cy.get('div[aria-label="Saved Successfully"]', { timeout: 10000 })
    .should('be.visible');
  
    // Step 10: Ensure success message disappears before proceeding
    cy.get('div[aria-label="Saved Successfully"]', { timeout: 10000 }) 
      .should('not.exist');

    cy.log("✅ Success message appeared and disappeared.");
}
