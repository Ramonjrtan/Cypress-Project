import env from '../../cypress.env.json';

export function d1_editvendorrates() {
  // Step 1: Visit vendor profile
  cy.visit(env.vendorURLProfile);
  cy.contains('h1, h2, h3', 'Cypress Test Vendor edit (', { timeout: 10000 }).should('be.visible');
  cy.log('✅ Vendor profile loaded successfully');

  // Step 2: Open Vendor Rates section
  cy.contains('button', 'Vendor Rates').click();

  // Step 3: Click edit icon in the first row (use a more stable selector if available)
  cy.get('tbody tr').first().within(() => {
    cy.get('button')
      .contains('border_color')  // Select the button containing the "border_color" icon
      .should('be.visible')
      .click();
  });
  
  // Step 4: Confirm edit modal
  cy.contains('Edit Vendor Rate Details', { timeout: 10000 }).should('be.visible');
  cy.wait(500); // Optional short wait to ensure modal is rendered
  cy.log('✅ Edit Vendor Rate Details modal opened successfully');

  cy.wait(1000); // Optional short wait to ensure modal is rendered

  // Step 5: Enter comments
  cy.get(env.vendorRatesComments).scrollIntoView().type('Cypress Test Comment');        
  cy.log('✅ Comment entered successfully');

  // Step 6: Click Save
  cy.contains('button', 'Save').should('be.enabled').click();
  cy.log('✅ Save button clicked successfully');

  // Step 7: Confirm success message
  cy.get(env.toastMessageContainer, { timeout: 10000 })
    .should('be.visible')
    .contains('Vendor rates updated successfully');
  cy.log('✅ Success: Vendor rates updated');

  // Step 8: Confirm success message disappears
  cy.wait(2000); // Allow time for toast to disappear
  cy.get(env.toastMessageContainer, { timeout: 10000 }).should('not.exist');
  cy.log('✅ Success message disappeared successfully');
}
