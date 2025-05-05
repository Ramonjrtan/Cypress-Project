import env from '../../cypress.env.json';

export function d1_editvendor() {
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
cy.get(env.vendorNameInput).eq(0).type('Cypress Test Vendor').type('{enter}');
cy.wait(5000);

cy.get('h5').contains('Cypress Test Vendor').should('be.visible').click();
cy.log('✅ Successfully searched for vendor: Cypress Test Vendor');

cy.get('.vendor-name').should('be.visible').contains('Cypress Test Vendor');
cy.log('✅ Vendor name is visible: Cypress Test Vendor');

cy.get(env.vendorEditButton).click();

  // Step 4: Ensure header appears
  cy.get(env.addVendorHeader)
    .contains('Basic Profile')
    .should('be.visible');
  cy.log('✅ Add Vendor page header is visible');


//   // Step 5: Fill out the form fields
//   const randomEmail = `cypresstest${Math.floor(Math.random() * 10000)}@gmail.com`;
  cy.get(env.vendorNameInput).eq(1).clear().type('Cypress Test Vendor edit');
  cy.wait(5000);
//   cy.get(env.vendorTypeDropdown).should('be.visible').select('Direct');
//   cy.get(env.vendorEmailField).clear().type(randomEmail);
//   cy.get(env.clientAddressField).clear().type('12 Baker Dr');
//   cy.get(env.vendorStateProvinceField).clear().type('GA');
//   cy.get(env.clientCityField).clear().type('Savannah');
//   cy.get(env.vendorBusinessPhoneField).clear().type('1234567890');
//   cy.get(env.vendorCountryDropdown).should('be.visible').select('71'); // United States
//   cy.get(env.vendorZipPostalCodeField).clear().type('31410');
//   cy.get(env.vendorPaymentTypeDropdown).scrollIntoView().should('be.visible').select('Check');  // Select the "Check" option
//   cy.get(env.vendorPaymentTermsDropdown).should('be.visible').select('Net 30');
//   cy.get(env.vendorCurrencyInput)
//     .should('be.visible')
//      .select('USD')
//   cy.log('✅ Selected Currency: USD');

  // Step 6: Click Save
  cy.get(env.clientSaveButton)
    .contains('Save')
    .scrollIntoView()
    .should('be.visible')
    .click();
  cy.log('✅ Successfully Completed Adding Client');

  //Optional: Uncomment if you want success message verification
  cy.get(env.vendorEditSuccessMessage, { timeout: 10000 }).should('be.visible');
  cy.log('✅ Verified success message');
  cy.get(env.vendorEditSuccessMessage, { timeout: 10000 }).should('not.exist');
}
