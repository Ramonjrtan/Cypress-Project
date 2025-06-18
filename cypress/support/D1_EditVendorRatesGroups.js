//  Cypress & Environment
import env from '../../cypress.env.json';

export function d1_editvendorrates() {
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
  cy.get(env.vendorRates.Comments).scrollIntoView().type('Cypress Test Comment');        
  cy.log('✅ Comment entered successfully');

  // Step 6: Click Save
  cy.contains('button', 'Save').should('be.enabled').click();
  cy.log('✅ Save button clicked successfully');

  // Step 7: Confirm success message
  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 })
    .should('be.visible')
    .contains('Vendor rates updated successfully');
  cy.log('✅ Success: Vendor rates updated');

  // Step 8: Confirm success message disappears
  cy.wait(2000); // Allow time for toast to disappear
  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 }).should('not.exist');
  cy.log('✅ Success message disappeared successfully');
}
