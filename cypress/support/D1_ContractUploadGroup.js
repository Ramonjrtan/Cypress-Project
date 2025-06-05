import env from '../../cypress.env.json';
import 'cypress-file-upload'; // Import the file upload plugin

export function contract_upload() {
  // Step 1: Visit the contract document upload page URL
  cy.visit(env.contractDocument.contractDocumentsPage);

  // Step 2: Verify the page header contains 'Documents' and is visible
  cy.get(env.contractDocument.pageHeader)
    .should('contain', 'Documents')
    .and('be.visible');

  // Step 3: Click the "Add Document" button to open the upload modal
  cy.log('Clicking Add Document button');
  cy.get(env.contractDocument.addDocumentButton)
    .should('be.visible')
    .click();

  // Step 4: Wait for the modal container to be visible
  cy.get(env.contractDocument.modalContainer)
    .should('exist')
    .and('be.visible');

  // Step 5: Verify modal header contains 'Add Document'
  cy.get(env.contractDocument.modalHeader)
    .should('be.visible')
    .and('contain', 'Add Document');

  // Step 6: Enter the document name into the input field
  cy.log('Typing document name');
  cy.get(env.contractDocument.documentNameInput)
    .should('be.visible')
    .type('Test Document Name');

  // Step 7: Open the Document Type dropdown menu
  cy.get(env.contractDocument.documentTypeDropdown)
    .should('be.visible')
    .select('Proforma');

  // Step 9: Attach the file specified by the selector from environment config
  cy.log('Attaching file');
  cy.get(env.deliverableFileInput)
    .should('exist')
    .attachFile('sample_xlsb.xlsb', { force: true });
  cy.log('✅ File sample_xlsb.xlsb attached successfully');

  // step 8: Enter description into the text area
  cy.get(env.contractDocument.descriptionTextarea)
    .should('be.visible')
    .type('This is a test document description');

  // Step 10: Click the Save button to submit the document upload
  cy.log('Clicking Save button');
  cy.get(env.contractDocument.saveButton)
    .should('be.visible')
    .click();

  // Step 11: Verify the modal closes, indicating upload completion
  cy.get('.cds--modal').should('not.exist');
  cy.log('✅ Document upload completed');
}
