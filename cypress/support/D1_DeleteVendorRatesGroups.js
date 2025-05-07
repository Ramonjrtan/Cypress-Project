import env from '../../cypress.env.json';

export function d1_deletevendorrates() {
  // Step 1: Click on Vendors
  cy.contains(env.clientsTabIcon, 'tools_ladder').click();
  cy.log('✅ Successfully Clicked Vendors');

  // Step 2: Ensure header appears
  cy.get(env.clientsPageHeader, { timeout: 20000 })
    .contains('Vendors')
    .should('be.visible');
  cy.log('✅ Vendors page header is visible');

//   // Wait for spinner to disappear before clicking Add Vendor
//   cy.get('.spinner-image').should('not.exist');
cy.wait(5000);

//search for the vendor and click on it
  cy.get('#tbSearch').type('Cypress Test Vendor edit', { timeout: 10000 }).type('{enter}');
  cy.wait(5000); // Wait for the search results to load
  cy.get('div[class="details"] h5').contains('Cypress Test Vendor edit').click({force: true});


  // Step 1: Visit vendor profile
  // cy.visit(env.vendorURLProfile);
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
