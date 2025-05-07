import env from '../../cypress.env.json';

export function d1_addvendorrates() {
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
  cy.contains('button', 'Add Vendor Rates').should('be.visible').click();
  cy.contains('Add Vendor Rate Details').should('be.visible').click();
  cy.log('✅ Add Vendor Rate Details modal opened successfully');

  // Step 3: Select Country
  cy.get(env.vendorRateCountryDropdown)
    .should('be.visible')
    .type('United States');
  cy.get(env.vendorRatesUnitedStates).should('be.visible').click();
  cy.log('✅ Country selected successfully');

  // Step 4: Select Currency
  cy.get(env.vendorRatesCurrencyDropdown)
    .should('be.visible')
    .click()
    .type('USD', { delay: 100 })
    .type('{downarrow}')
    .type('{enter}');
  // cy.get(env.vendorRatesUSD).should('be.visible').click();
  cy.log('✅ Currency selected successfully');

  // Step 5: Fill in rate fields
  cy.get(env.vendorRatesHoursOfBaseRate).click({ force: true }).type('10');
  cy.get(env.vendorRatesStandardHourlyRate).click({ force: true }).type('10');
  cy.get(env.vendorRatesStandardBaseHourlyRate).click({ force: true }).type('10');
  cy.get(env.vendorRatesStandardAdditionalHoursRate).click({ force: true }).type('10');
  cy.log('✅ Rate fields filled successfully');

  // Step 6: Save
  cy.contains('button', 'Save').should('be.enabled').click();
  cy.log('✅ Save button clicked successfully');

  // Step 7: Confirm success message
  cy.get(env.toastMessageContainer, { timeout: 10000 })
    .should('be.visible')
    .contains('Vendor rates added successfully');
  cy.log('✅ Success: Vendor rates added');

  // Step 8: Confirm success message disappears
  cy.get(env.toastMessageContainer, { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Success message disappeared successfully');
}
