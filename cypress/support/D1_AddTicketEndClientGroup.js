//  Cypress & Environment
import env from '../../cypress.env.json';

export function add_ticketendclient() {
  cy.wait(5000);
  cy.log('⏳ Initial wait complete');

  // Step 1: Click on the Tickets tab
  cy.get(env.ticketsTabButton, { timeout: 60000 })
    .should('be.visible')
    .click();
  cy.log('✅ Step 1: Clicked Tickets tab');

  // Step 2: Ensure the Tickets tab is fully loaded
  cy.get(env.ticketsHeader, { timeout: 60000 })
    .should('contain', 'Tickets');
  cy.log('✅ Step 2: Tickets header is visible');

  // Step 3: Wait until the "Add Ticket" button is enabled and clickable
  cy.get(env.addTicketButton, { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled');
  cy.log('✅ Step 3: Add Ticket button is enabled');

  // Step 4: Click on "Add Ticket" button
  cy.get(env.addTicketButton, { timeout: 10000 })
    .click();
  cy.log('✅ Step 4: Clicked Add Ticket button');

  // Step 5: Handle Modal Appearance
  cy.get(env.addTicketModal, { timeout: 20000 })
    .should('exist')
    .and('be.visible');
  cy.log('✅ Step 5: Add Ticket modal is visible');

  cy.get(env.addTicketModal).within(() => {
    // Step 5.1: Click Ticket Title label
    cy.contains(env.ticketTitleLabel, 'Ticket Title').click();
    cy.log('✅ Step 5.1: Clicked Ticket Title label');

    // Step 5.2: Enter Ticket Title
    cy.get(env.ticketTitleInput)
      .should('be.visible')
      .then(($input) => {
        if ($input.val().trim().length > 0) {
          cy.wrap($input).clear();
          cy.log('ℹ️ Cleared existing Ticket Title input');
        }
      })
      .type('Cypress Test Ticket');
    cy.log('✅ Step 5.2: Entered Ticket Title');

// Enter invalid End Client
    cy.get('ng-select[placeholder="Select End Client"] input[role="combobox"]')
      .clear()
      .type('Coates Group', { delay: 100 });
    cy.log('✅ Step 5.3: Entered invalid End Client');

    // Wait for dropdown to render and check for "No items found"
    cy.get('ng-dropdown-panel')
      .should('be.visible')
      .within(() => {
        cy.contains('div.ng-option-disabled', 'No items found')
          .should('be.visible');
      });
    cy.log('✅ Step 5.4: Verified "No items found" for invalid client');

    // Enter valid End Client
    cy.get('ng-select[placeholder="Select End Client"] input[role="combobox"]')
      .clear()
      .type('Test Client (USE FOR TESTING)', { delay: 100 })
      .type('{enter}');
    cy.log('✅ Step 5.5: Entered valid End Client');

    // Step 5.6: Click Add Location button
    cy.get('.col-4 > fieldflow-button.form-control > .primary').click();
    cy.log('✅ Step 5.6: Clicked Add Location button');
    }); // 🔴 END of within(env.addTicketModal)

    cy.wait(3000); // Wait for the modal to appear

// Step 5.6.1: Ensure the Add Location dialog container exists
cy.get('#activity-add-modal', { timeout: 3000 })
  .should('exist')
  .and('be.visible');
cy.log('✅ Step 5.6.1: Modal Add Location is visible');

  // Step 5.6.2: Ensure Add Location dialog header exists
  cy.get('#activity-add-modal .header > div', { timeout: 3000 })
    .should('contain.text', 'Add Location');
  cy.log('✅ Step 5.6.2: Modal header shows "Add Location"');


    // Step 5.7: Enter Location Name
    cy.get('#activity-add-modal > .content > d1-pagination-builder > d1-filter-builder.ng-star-inserted > form.ng-untouched > .wrapper > .input-grouping > .ng-untouched', { timeout: 10000 })
      .should('be.visible')
      .type('Test location McD');
    cy.log('✅ Step 5.7: Entered Location Name');

    // Step 5.8: Verify Location Name
    cy.get('[headers="table-header-0-1-3"]', { timeout: 10000 })
      .should('have.text', 'Test location McD');
    cy.log('✅ Step 5.8: Verified Location Name in table');

    // Step 5.9: Select End Client radio button
    cy.get('.cds--radio-button__appearance').click();
    cy.log('✅ Step 5.9: Selected End Client radio button');

  // Step 6: Store Ticket Title input value
  cy.get(env.ticketTitleInput).invoke('val').as('TicketName');
  cy.log('✅ Step 6: Stored Ticket Title input value');

  // Step 7: Wait for Save button to be enabled
  cy.waitUntil(() =>
    cy.get(env.ticketSaveButton).first()
      .should('be.enabled'),
    { timeout: 10000, interval: 500 }
  );
  cy.log('✅ Step 7: Save button is enabled');

  // Step 8: Click Save button
  cy.get(env.ticketSaveButton).first()
    .should('be.visible')
    .click();
  cy.log('✅ Step 8: Clicked Save button');

  // Step 8.1: Confirm toast message appears
  cy.get('.toast-info > .toast-message', { timeout: 10000 })
    .should('be.visible')
    .contains('Task "Create PO/WO" has been automatically completed.');
  cy.log('✅ Step 8.1: Toast message for Create PO/WO appeared');

  // Step 9: Confirm success message
  cy.get(env.ticketSuccessMessage, { timeout: 10000 })
    .should('be.visible');
  cy.log('✅ Step 9: "Saved Successfully" message appeared');

  // Step 10: Ensure success message disappears
  cy.get(env.ticketSuccessMessage, { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Step 10: Success message disappeared');
}
