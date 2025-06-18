
//  Cypress & Environment
import env from '../../cypress.env.json';

export function cp_addclientlocation() {
  // Step 1: Click Locations tab
  cy.get(env.clientPortal.Locations)
    .should('be.visible')
    .click();
  cy.log('✅ Success: Clicked Locations tab');

  // Step 2: Wait for and confirm Locations page has loaded
  cy.contains('h1', 'Locations', { timeout: 60000 }).should('be.visible');
  cy.log('✅ Success: Locations page loaded');

  // Step 3: Click the "Add Location" button
  cy.get('a[href="/Location/Add"]')
    .should('be.visible')
    .click();
  cy.log('✅ Success: Clicked Add Location button');

  // Step 4: Wait for and confirm Add Location page has loaded
  cy.contains('h1', 'Add Location', { timeout: 60000 }).should('be.visible');
  cy.log('✅ Success: Add Location page loaded');

  // Step 5: Select End Client
  cy.get(env.clientPortal.EndClientDropdown)
    .first()
    .type('Test End Client Portal #1', { timeout: 10000 });
  cy.get(env.clientPortal.DropdownOption)
    .contains('Test End Client Portal #1')
    .click();
  cy.log('✅ Success: Selected End Client');

  // Step 6: Enter Location Name
  cy.get('input[formcontrolname="Name"]')
    .should('be.visible')
    .type('CP Cypress Test Location');
  cy.log('✅ Success: Entered Location Name');

  // Step 7: Enter Address
  cy.get(env.clientPortal.LocationAddressInput)
    .should('be.visible')
    .type('2230 S Sherman Dr, Indianapolis, IN 46203, USA', { force: true });
  cy.wait(3000); // Allow suggestions to load

  // Step 8: Select Address from Dropdown
  cy.get('.ng-option')
    .should('contain.text', '2230 S Sherman Dr')
    .click({ force: true });
  cy.log('✅ Success: Entered and selected Location Address');

  // Step 9: Enter Phone Number
  cy.get('input[formcontrolname="numberControl"]')
    .should('be.visible')
    .clear()
    .type('13177881326');
  cy.log('✅ Success: Entered Location Phone Number');
  cy.wait(3000); // Allow any potential loading

  // Step 10: Click Submit
  cy.get('[type="submit"]')
    .should('be.visible')
    .click({ force: true });
  cy.log('✅ Success: Clicked Save Location button');

  // Step 11: Verify Success Message
  cy.get(env.clientPortal.SuccessMessage, { timeout: 10000 }).should('be.visible');
  cy.get(env.clientPortal.SuccessMessage, { timeout: 10000 }).should('not.exist');
  cy.log('✅ Success: Location saved and confirmation verified');

  // // Step 12: Search for the added Location
  // cy.get('input[placeholder="Search Location..."]')
  //   .should('be.visible')
  //   .clear()
  //   .type('CP Cypress Test Location');
  // cy.log('✅ Success: Searched for Location');

  // //Step 13: Search for the End Client
  // cy.get(env.cpEndClientDropdown)
  // .first()
  // .type('Test End Client Portal #1', { timeout: 10000 });
  // cy.get(env.cpDropdownOption)
  // .contains('Test End Client Portal #1')
  // .click();
  // cy.log('✅ Success: Selected End Client');

  // // Step 14: Verify the Location in the table
  // cy.get('[headers="table-header-0-2-1"]')
  //   .should('contain', 'CP Cypress Test Location');
  // cy.log('✅ Success: Verified Location Name in table');
}
