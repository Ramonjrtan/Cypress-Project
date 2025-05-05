import env from '../../cypress.env.json';

export function d1_deleteclient() {
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
  
    // Step 8: Verify the Client Name field is visible and contains the expected value
    cy.get(env.clientNameField)
      .should('be.visible')  // Check if the input is visible
      .and('have.value', 'Cypress Test Client')  // Verify it has the expected value
      .then(($input) => {
        cy.log(`✅ Client Name field is visible and contains: "${$input.val()}"`);
      });
  
    // Step 9: Click the delete button
    cy.get(env.deleteButton).contains('Delete').click();
    cy.log('✅ Clicked Delete button');
  
    // Step 10: Confirm deletion
    cy.get(env.confirmDeleteButton).contains('Yes').click();
    cy.log('✅ Confirmed deletion by clicking Yes');
  
    // Step 11: Verify success message after deletion
    cy.get(env.deleteSuccessMessage, { timeout: 10000 }).should('be.visible');
    cy.log('✅ Verified success message');
  
    // Step 12: Ensure success message disappears before proceeding
    cy.get(env.deleteSuccessMessage, { timeout: 10000 })
      .should('not.exist');
    cy.log('✅ Verified success message disappeared');
  
    // Step 13: Click on Clients
    cy.get(env.clientsTabIcon).contains('store').click();
    cy.log('✅ Successfully Clicked Clients');
  
    // Step 14: Ensure the Clients page header appears
    cy.get(env.clientsPageHeader).contains('Clients').should('be.visible');
    cy.log('✅ Clients page header is visible');
  
    // Step 15: Clear and type in Search field
    cy.get(env.clientSearchField).clear().type('Cypress Test Client');
    cy.log('✅ Cleared and typed in Search field: Cypress Test Client');
  
    // Step 16: Check if the "No records available" message is displayed
    cy.get(env.noRecordsMessage)
      .contains('No records available for the selected filters.')
      .should('be.visible');
    cy.log('✅ Verified that "No records available for the selected filters." message is visible');
}
