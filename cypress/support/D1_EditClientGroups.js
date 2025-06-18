//  Cypress & Environment
import env from '../../cypress.env.json';

export function d1_editclient() {
  // Step 1: Wait for the page to load
  cy.wait(5000);

  // Step 2: Click on Clients
  cy.get(env.clientsTabIcon).contains('store').click();
  cy.log('✅ Successfully Clicked Clients');

  // Step 3: Ensure the Clients page header appears
  cy.get(env.clientsPageHeader).contains('Clients').should('be.visible');
  cy.log('✅ Clients page header is visible');

  // Step 4: Clear and type in Search field
  cy.get(env.clientSearchField).clear().type('Cypress Test Client');
  cy.log('✅ Cleared and typed in Search field: Cypress Test Client');

  // Step 5: Verify client is visible in the table
  cy.get(env.clientTable)
    .contains('Cypress Test Client')
    .should('be.visible');
  cy.log('✅ Verified client "Cypress Test Client" is visible in the table');

  // Step 6: Click on Edit Client
  cy.get(env.editClientButton).contains('edit').click();
  cy.log('✅ Clicked Edit Client icon');

  // Step 7: Ensure the Edit Client page header appears
  cy.get(env.editClientPageHeader).contains('Edit Client').should('be.visible');
  cy.log('✅ Edit Client page header is visible');

  // Step 8: Verify the Client Name field is visible and contains the correct value
  cy.get(env.clientNameField)
    .should('be.visible')  // Check if the input is visible
    .and('have.value', 'Cypress Test Client')  // Verify it has the expected value
    .then(($input) => {
      cy.log(`✅ Client Name field is visible and contains: "${$input.val()}"`);
    });

  // Step 9: Upload logo_test.png via Choose File button
  cy.get(env.clientFileUploadInput)
    .should('exist')
    .attachFile('logo_test.png');
  cy.log('✅ Successfully uploaded logo_test.png');

  // Step 10: Fill out the form fields
  // Generate a random email
  const randomEmail = `cypresstest${Math.floor(Math.random() * 10000)}@gmail.com`;
  cy.get(env.clientPhoneField).clear().type('1234567890');
  cy.get(env.clientEmailField).clear().type(randomEmail);
  cy.get(env.clientAddressField).clear().type('12 Baker Dr');
  cy.get(env.clientCityField).clear().type('Savannah');
  cy.get(env.clientStateField).clear().type('GA');
  cy.get(env.clientPostalCodeField).clear().type('31410');
  cy.log(`✅ Filled out all form fields with random email: ${randomEmail}`);

  // Step 11: Click Save
  cy.get(env.clientSaveButton).contains('Save').should('be.visible').click();
  cy.log('✅ Successfully Completed Editing Client');

  // Step 12: Verify success message
  cy.get(env.editClientSuccessMessage, { timeout: 10000 }).should('be.visible');
  cy.log('✅ Verified success message');

  // Step 13: Ensure success message disappears before proceeding
  cy.get(env.editClientSuccessMessage, { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Verified success message disappeared');
}
