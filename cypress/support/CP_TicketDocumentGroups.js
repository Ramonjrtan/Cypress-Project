import env from '../../cypress.env.json';

export function cp_ticketdocument() {
    // Step 1: Click Add Document
    cy.contains('button', env.cpAddDocumentButton).click();

    // Step 2: Ensure "Add New Document" label is visible
    cy.contains('h2', env.cpAddNewDocumentLabel).should('be.visible');

    // Step 3: Type Document Title
    cy.get(env.cpDocumentTitleInput).type(env.cpDocumentTitle);

    // Step 4: Select Document Type from the dropdown
    cy.get(env.cpDocumentTypeDropdown)
      .click(); // Open the dropdown

    cy.get(env.cpDocDropdownOption) // Select dropdown options
      .contains(env.cpDocumentTypeOption) // Find the "Other" option
      .click(); // Click to select

    // Step 5: Enter Document Description
    cy.get(env.cpDocumentDescriptionInput).type(env.cpDocumentDescription);

    // Step 6: Upload Document
    cy.get(env.cpFileUploadInput)
      .should('exist')
      .attachFile(env.cpFileToUpload); // Upload file
    cy.wait(3000);

    // Step 7: Click Save
    cy.get(env.cpDocSaveButton)
      .contains(env.cpSaveButtonLabel)
      .click();

    // Step 8: Verify Attached Documents label is visible
    cy.contains('label', env.cpAttachedDocumentsLabel).should('be.visible');
}
