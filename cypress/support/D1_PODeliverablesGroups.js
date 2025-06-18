//  Cypress & Environment
import env from '../../cypress.env.json';

export function po_deliverables() {
  // Step 1: Click on PO Deliverable tab
  cy.contains(env.deliverablesTab, 'Deliverables', { timeout: 10000 })
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Step 2: Wait until the "Add Required Deliverables" page is fully loaded
  cy.contains(env.deliverablesHeader, 'Add Required Deliverables', { timeout: 10000 })
    .should('be.visible');

  // Step 3: Click "Add Required Deliverable" button
  cy.get(env.addDeliverableButton)
    .contains('Add Required Deliverable')
    .should('be.visible')
    .click();

  // Step 4: Wait until "Add Deliverable Requirement" modal appears
  cy.get(env.addDeliverableModalHeader)
    .contains('Add Deliverable Requirement')
    .should('be.visible');

  // Step 5: Enter Deliverable Name
  cy.get(env.deliverableNameInput)
    .should('be.visible')
    .clear()
    .type('Deliverable Test');

  // Step 6: Click Deliverable Type dropdown
  cy.get(env.deliverableTypeDropdown)
    .should('be.visible')
    .click();

  // Step 7: Select "Photos" from the dropdown
  cy.get(env.deliverableTypeOption)
    .contains('Photos')
    .click();

  // Step 8: Enter "1" in the No. of Files field
  cy.get(env.noOfFilesInput)
    .should('be.visible')
    .clear()
    .type('1');

  // Step 9: Click the Save button
  cy.contains(env.deliverableSaveButton, 'Save')
    .should('be.visible')
    .click();

  // Step 10: Verify success message appears
  cy.get(env.deliverableAddedToast, { timeout: 10000 }) 
    .should('be.visible');

  // Step 12: Click Upload Deliverable button
  cy.contains(env.deliverableUploadButton, 'Upload Deliverable')
    .should('be.visible')
    .click();

  // Step 13: Wait until the "Upload Deliverables" modal is loaded
  cy.contains(env.deliverableUploadModalHeader, 'Upload Deliverables', { timeout: 10000 })
    .should('be.visible');

  // Step 14: Attach file to the hidden input field
  cy.get(env.deliverableFileInput)
    .should('exist')
    .attachFile('Test_upload1.jpg');

  // Step 15: Click Next button
  cy.get(env.deliverableNextButton)
    .contains('Next', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 16: Click Save button
  cy.get(env.deliverableFinalSaveButton)
    .contains('Save', { timeout: 10000 })
    .should('be.visible')
    .click();

  // Step 17: Verify success message appears
  cy.get(env.deliverableFinalToast, { timeout: 10000 }) 
    .should('be.visible');
}
