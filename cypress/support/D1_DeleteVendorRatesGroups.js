import env from '../../cypress.env.json';

export function d1_deletevendorrates() {
  // Step 1: Visit vendor profile
  cy.visit(env.vendorURLProfile);
  cy.contains('h1, h2, h3', 'Cypress Test Vendor edit (', { timeout: 10000 }).should('be.visible');
  cy.log('✅ Vendor profile loaded successfully');

  // Step 2: Open Vendor Rates section
  cy.contains('button', 'Vendor Rates').click();

// Step 3: Click delete icon in the first row
cy.get('tbody tr').first().within(() => {
    cy.get('mat-icon')
      .contains('delete')
      .parents('button')
      .should('be.visible')
      .click({ force: true });
  });
    cy.log('✅ Delete icon clicked successfully');

// Step 4: Confirm delete action in the modal
cy.get('[buttontype="danger"] > .danger')
    .should('exist')
    .click({ force: true });
  cy.log('✅ Delete action confirmed successfully');


  // Step 5: Confirm success message appears
  cy.get(env.toastMessageContainer, { timeout: 10000 })
    .should('be.visible')
    .contains('Deleted successfully');
  cy.log('✅ Success: Vendor rates deleted');

  // Step 6: Wait and confirm toast disappears
  cy.wait(2000); // Allow toast to auto-dismiss (adjust if needed)
  cy.get(env.toastMessageContainer, { timeout: 10000 }).should('not.exist');
  cy.log('✅ Success message disappeared successfully');
}
