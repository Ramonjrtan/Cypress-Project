import env from '../../cypress.env.json';

export function d1_addclient() {
    cy.wait(5000);
    
    // Step 1: Click on Clients
    cy.contains(env.clientsTabIcon, 'store').click();
    cy.log('✅ Successfully Clicked Clients');

    // Ensure header appears
    cy.get(env.clientsPageHeader).contains('Clients').should('be.visible');
    cy.log('✅ Clients page header is visible');

    // Step 3: Click the "Add Clients" button
    cy.contains(env.addClientsButton, 'Add Clients').click();
    cy.log('✅ Successfully Clicked Add Clients');

    // Ensure header appears
    cy.get(env.addClientPageHeader).contains('Add Client').should('be.visible');
    cy.log('✅ Add Client page header is visible');

    // Step 4: Enter Client name
    cy.get(env.clientNameInput).type('Cypress Test Client');
    cy.log('✅ Entered Client Name: Cypress Test Client');

    // Verify Client Name input
    cy.get(env.clientNameInput).should('have.value', 'Cypress Test Client');
    cy.log('✅ Verified Client Name input value');

    // Step 5: Select Relationship type dropdown
    cy.get(env.clientRelationshipDropdown).should('be.visible').select('Direct'); // Select "Direct" option by visible text
    cy.log('✅ Selected Relationship Type: Direct');

    // Step 6: Select Currency
    cy.get(env.clientCurrencyInput)
        .first()  // Ensure to target the first matching element
        .should('be.visible')
        .type('USD')
        .type('{enter}');
    cy.log('✅ Selected Currency: USD');

    // Step 7: Select the Country (United States)
    cy.get(env.clientCountryDropdown)  // Select the <select> dropdown by its ID
        .should('be.visible')  // Wait for the select element to be visible
        .select('71');  // Select the option with the value of '71' (United States)
    cy.log('✅ Successfully selected United States (value: 71)');

    // Step 8: Click Save
    cy.get(env.clientSaveButton).contains('Save').should('be.visible').click();
    cy.log('✅ Successfully Completed Adding Client');

    // Step 9: Verify success message
    cy.get(env.clientSuccessMessage, { timeout: 10000 }).should('be.visible');
    cy.log('✅ Verified success message');

    // Step 10: Ensure success message disappears before proceeding
    cy.get(env.clientSuccessMessage, { timeout: 10000 }) 
    .should('not.exist');
}
