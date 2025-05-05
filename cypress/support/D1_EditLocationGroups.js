import env from '../../cypress.env.json';

export function d1_editlocation() {
//   // Step 1: Wait for the page to load
//   cy.wait(5000);

//   // Step 2: Click on Clients
//   cy.get(env.clientsTabIcon).contains('store').click();
//   cy.log('✅ Successfully Clicked Clients');

//   // Step 3: Ensure the Clients page header appears
//   cy.get(env.clientsPageHeader).contains('Clients').should('be.visible');
//   cy.log('✅ Clients page header is visible');

//   // Step 4: Clear and type in Search field
//   cy.get(env.clientSearchField).clear().type('Cypress Test Client');
//   cy.log('✅ Cleared and typed in Search field: Cypress Test Client');

//   // Step 5: Verify client is visible in the table
//   cy.get(env.clientTable)
//     .contains('Cypress Test Client')
//     .should('be.visible')
//     .click();
//     cy.log('✅ Clicked on client "Cypress Test Client" to open details');

  // Step 7: Click on Edit Location button
  cy.get(env.editLocationButton).should('be.visible').click();
  cy.log('✅ Clicked Edit Client Location button');

// Step 8: Wait for Location Details page and verify the value of the Location Name input field
cy.get(env.locationNameInput)
  .should('be.visible')  // Ensure the element is visible
  .and('have.value', 'Cypress Test Location');  // Check the value, not the text

  // Step 9: Edit Location details
  cy.get(env.locationNameInput).clear().type('Cypress Test Location edit');
    cy.get(env.phoneInput).clear().type('0987654321');
    cy.log('✅ Edited Location Name, Phone, and Address');
  
  // Step 10: Save the new location
  cy.get('button').contains('Save').should('be.enabled').click();
  cy.log('✅ Clicked Save Location');

  // Step 11: Verify success message
  cy.contains("Client location is successfully updated.", { timeout: 10000 })
    .should('be.visible');
  cy.log('✅ Location added');

  // Step 12: Ensure success message disappears before proceeding
  cy.contains("Client location is successfully updated.", { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Verified success message disappeared');



}
