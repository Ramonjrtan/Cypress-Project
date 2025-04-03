export function po_deliverables() {
  // Step 1: Click on PO Deliverable tab
  cy.contains('button', 'Deliverables', { timeout: 10000 })
  .scrollIntoView() // Ensure the element is within the viewport
    .should('be.visible')
    .click();



  // Step 2: Wait until the "Add Required Deliverables" page is fully loaded
  cy.contains('h1', 'Add Required Deliverables', { timeout: 10000 })
    .should('be.visible');

  // Step 3: Click "Add Required Deliverable" button
  cy.get('button.bx--btn--primary')
    .contains('Add Required Deliverable')
    .should('be.visible')
    .click();

  // Step 4: Wait until "Add Deliverable Requirement" modal appears
  cy.get('h3').contains('Add Deliverable Requirement')
    .should('be.visible');

  // Step 5: Enter Deliverable Name
  cy.get('input[formcontrolname="name"]')
    .should('be.visible')
    .clear()
    .type('Deliverable Test');

  // Step 6: Click Deliverable Type dropdown
  cy.get('ng-select[formcontrolname="deliverableTypeId"]')
    .should('be.visible')
    .click();

  // Step 7: Select "Photos" from the dropdown
  cy.get('.ng-dropdown-panel .ng-option')
    .contains('Photos')
    .click();

  // Step 8: Enter "1" in the No. of Files field
  cy.get('input[formcontrolname="noOfFiles"]')
    .should('be.visible')
    .clear()
    .type('1');

  // Step 9: Click the Save button
  cy.contains('button', 'Save')
    .should('be.visible')
    .click();

  // Step 10: Verify success message appears
  cy.get("div[aria-label='Deliverable requirement added successfully']", { timeout: 10000 }) 
    .should('be.visible');

  // // Step 11: Ensure success message disappears before proceeding
  // cy.get("div[aria-label='Deliverable requirement added successfully']", { timeout: 10000 }) 
  //   .should('not.exist');

  // Step 12: Click Upload Deliverable button
  cy.contains('button', 'Upload Deliverable')
    .should('be.visible')
    .click();

  // Step 13: Wait until the "Upload Deliverables" modal is loaded
  cy.contains('div', 'Upload Deliverables', { timeout: 10000 })
    .should('be.visible');


  //  // Step 14: Click Browse button.
  //  cy.get('button.primary').contains('Browse') // Target button with class "primary" and text "Browse"
  //  .should('be.visible')
  //  .click();

  // Step 14: Attach file to the hidden input field
  cy.get('input[type="file"]')
    .should('exist')
    .attachFile('Test_upload1.jpg');

  // Step 15: Click Next button
  cy.get('button.primary').contains('Next', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 16: Click Save button
  cy.get('button.primary').contains('Save', { timeout: 10000 })
    .should('be.visible')
    .click();
 
  // Step 17: Verify success message appears
  cy.get("div[aria-label='Deliverables are successfully added.']", { timeout: 10000 }) 
    .should('be.visible');

  // // Step 18: Ensure success message disappears before proceeding
  // cy.get("div[aria-label='Deliverables are successfully added.']", { timeout: 10000 }) 
  //   .should('not.exist');
}
