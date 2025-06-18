//  Cypress & Environment
import env from '../../cypress.env.json';

export function cp_ticketdocument() {
    // Step 1: Click Add Document
    cy.contains('button', env.clientPortal.AddDocumentButton).click();

    // Step 2: Ensure "Add New Document" label is visible
    cy.contains('h2', env.clientPortal.AddNewDocumentLabel).should('be.visible');

    // Step 3: Type Document Title
    cy.get(env.clientPortal.DocumentTitleInput).type(env.cpDocumentTitle);

    // Step 4: Select Document Type from the dropdown
    cy.get(env.clientPortal.DocumentTypeDropdown)
      .click(); // Open the dropdown

    cy.get(env.clientPortal.DocDropdownOption) // Select dropdown options
      .contains(env.clientPortal.DocumentTypeOption) // Find the "Other" option
      .click(); // Click to select

    // Step 5: Enter Document Description
    cy.get(env.clientPortal.DocumentDescriptionInput).type(env.cpDocumentDescription);

    // Step 6: Upload Document
    cy.get(env.clientPortal.FileUploadInput)
      .should('exist')
      .attachFile(env.clientPortal.FileToUpload); // Upload file
    cy.wait(3000);

    // Step 7: Click Save
    cy.get(env.clientPortal.DocSaveButton)
      .contains(env.clientPortal.SaveButtonLabel)
      .click();

    // Step 8: Verify Attached Documents label is visible
    cy.contains('label', env.clientPortal.AttachedDocumentsLabel).should('be.visible');
}
