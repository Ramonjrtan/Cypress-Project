import env from '../../cypress.env.json';

export function d1_deletevendor() {
  cy.wait(5000);

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

// Step 3: Search for a vendor
cy.get(env.vendorNameInput).eq(0).type('Cypress Test Vendor edit').type('{enter}');
cy.wait(5000);

cy.get('h5').contains('Cypress Test Vendor edit').should('be.visible').click();
cy.log('✅ Successfully searched for vendor: Cypress Test edit');

cy.get('.vendor-name').should('be.visible').contains('Cypress Test Vendor edit');
cy.log('✅ Vendor name is visible: Cypress Test Vendor edit');

cy.get(env.vendorEditButton).click();

  // Step 4: Ensure header appears
  cy.get(env.addVendorHeader)
    .contains('Basic Profile')
    .should('be.visible');
  cy.log('✅ Add Vendor page header is visible');


    // Step 9: Click the delete button
    cy.get(env.deleteButton).contains('Delete').scrollIntoView().click();
    cy.log('✅ Clicked Delete button');
  
    // Step 10: Confirm deletion
    cy.get(env.confirmDeleteButton).contains('Yes').click();
    cy.log('✅ Confirmed deletion by clicking Yes');
  
    // Step 11: Verify success message after deletion
    cy.get(env.vendorDeleteSuccessMessage, { timeout: 10000 }).should('be.visible');
    cy.log('✅ Verified success message');
  
    // Step 12: Ensure success message disappears before proceeding
    cy.get(env.vendorDeleteSuccessMessage, { timeout: 10000 })
      .should('not.exist');
    cy.log('✅ Verified success message disappeared');
}
