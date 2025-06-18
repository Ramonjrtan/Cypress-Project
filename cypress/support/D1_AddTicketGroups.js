//  Cypress & Environment
import env from '../../cypress.env.json';

export function add_ticket() {
  cy.wait(5000);
  
  // Step 1: Click on the Tickets tab and wait for it to be visible
  cy.get(env.ticketsTabButton, { timeout: 60000 })
    .should('be.visible')
    .click();

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get(env.ticketsHeader, { timeout: 60000 })
    .should('contain', 'Tickets');

  // Step 3: Wait until the "Add Ticket" button is enabled and clickable
  cy.get(env.addTicketButton, { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');

  // Step 4: Click on "Add Ticket" button
  cy.get(env.addTicketButton, { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 5: Handle Modal Appearance
  cy.get(env.addTicketModal, { timeout: 20000 })
    .should('exist')
    .and('be.visible');

  cy.get(env.addTicketModal).within(() => {
    // Ensure "Ticket Title" input field is visible before interacting
    cy.contains(env.ticketTitleLabel, 'Ticket Title').click(); // Click the label first

    cy.get(env.ticketTitleInput)
      .should('be.visible')
      .then(($input) => {
        if ($input.val().trim().length > 0) {
          cy.wrap($input).clear();
        }
      })
      .type('Cypress Test Ticket');

    // Step 6: Store text from the Ticket Title input
    cy.get(env.ticketTitleInput).invoke('val').as('TicketName');

    // Step 7: Wait until the "Save" button is enabled before clicking
    cy.waitUntil(() => 
      cy.get(env.ticketSaveButton).first()
        .should('be.enabled'),
      { timeout: 10000, interval: 500 }
    );

    // Step 8: Click the Save button safely
    cy.get(env.ticketSaveButton).first()
      .should('be.visible')
      .click();
  });

//   // Toast: Task "Create PO/WO"
//   cy.get('.toast-info > .toast-message', { timeout: 10000 })
//   .should('be.visible')
//   .contains('Task "Create PO/WO" has been automatically completed.');
// cy.log('✅ Toast message for Create PO/WO appears successfully');

  // Step 9: Verify "Saved Successfully" message appears
  cy.get(env.ticketSuccessMessage, { timeout: 10000 })
    .should('be.visible');
  
  // Step 10: Ensure success message disappears before proceeding
  cy.get(env.ticketSuccessMessage, { timeout: 10000 })
    .should('not.exist');

  cy.log("✅ Success message appeared and disappeared.");
}
