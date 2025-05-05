import env from '../../cypress.env.json';

export function d1_deletelocation() {
//   // Step 1: Wait for the page to load
//   cy.wait(5000);

//   // Step 2: Click on Clients tab (ensure visibility before clicking)
//   cy.get(env.clientsTabIcon).contains('store').should('be.visible').click();
//   cy.log('✅ Successfully Clicked Clients');

//   // Step 3: Ensure the Clients page header appears
//   cy.get(env.clientsPageHeader).contains('Clients').should('be.visible');
//   cy.log('✅ Clients page header is visible');

//   // Step 4: Clear and type in Search field
//   cy.get(env.clientSearchField).clear().type('Cypress Test Client');
//   cy.log('✅ Cleared and typed in Search field: Cypress Test Client');

//   // Step 5: Verify client is visible in the table and click it
//   cy.get(env.clientTable)
//     .contains('Cypress Test Client')
//     .should('be.visible')
//     .click();
//   cy.log('✅ Clicked on client "Cypress Test Client" to open details');

  //Step 5: Wait for cspinner to disappear
    cy.get(env.spinner, { timeout: 10000 }).should('not.exist');
    cy.log('✅ Spinner disappeared, page is ready');

  // Step 5: Click on Delete Location button (Ensure this is the correct delete button)
  cy.get(env.deleteLocationButton, { timeout: 15000 })  // Increased timeout
  .should('be.visible')
  .click();
cy.log('✅ Clicked Delete Location button');

//Step 6: Wait for confirmation modal to appear
cy.get(env.deleteConfirmButton).contains('Delete').should('be.visible').click();
cy.log('✅ Clicked Delete button in confirmation modal');   

// Step 6: Verify no data message appears
cy.contains('No records available for the selected filters.', { timeout: 10000 })
  .should('be.visible');
cy.log('✅ No records available for the selected filters');

}
