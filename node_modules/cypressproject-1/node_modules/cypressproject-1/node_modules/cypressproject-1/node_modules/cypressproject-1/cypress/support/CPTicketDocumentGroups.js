export function cp_ticketdocument() {
    // Step 1: Click Add Document
    cy.contains('button', 'Add Document').click();

    // Step 2: Ensure "Add New Document" label is visible
    cy.contains('h2', 'Add New Document').should('be.visible');

    // Step 3: Type Document Title
    cy.get('input[placeholder="Document Title"]').type('CP Document Test');

    // Step 4: Select Document Type from the dropdown
    cy.get('ng-select[formcontrolname="DocumentType"]')
      .click(); // Open the dropdown

    cy.get('.ng-option') // Select dropdown options
      .contains('Other') // Find the "Other" option
      .click(); // Click to select

    // Step 5: Enter Document Description
    cy.get('textarea[formcontrolname="Description"]').type('Test Cypress Description');

    // Step 6: Upload Document
    cy.get('input[type="file"]')
      .should('exist')
      .attachFile('TestDocAttachment.docx'); // Upload file
      cy.wait(3000);

    // Step 7: Click Save
    cy.get('.mat-raised-button.mat-primary')
    .contains('Save')
    .click();

    // Step 8: Verify Attached Documents label is visible
    cy.contains('label', 'Attached Documents').should('be.visible');
}
