//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-file-upload';

export function cp_ticketbulkupload() {
  // Step 1: Click My Tickets
  cy.get(env.clientPortal.MyTicketsLink).should('be.visible').click();
  cy.log('✅ Success: Clicked My Tickets');

  // Step 2: Click "+ Add Ticket" button
  cy.contains('button', '+ Add Ticket').should('be.visible').click();
  cy.log('✅ Success: Clicked "+ Add Ticket"');

  // Step 3: Click "Bulk Ticket Upload"
  cy.contains('button', 'Bulk Ticket Upload').should('be.visible').click();
  cy.log('✅ Success: Clicked "Bulk Ticket Upload"');

// Step 4: Open the Contract dropdown and select the value
cy.get('mat-select[formcontrolname="Contract"]').should('be.visible').click();
cy.contains('mat-option', 'Dispatch SOW CP Test (USE FOR').should('be.visible').click();
cy.log('✅ Success: Selected Dispatch SOW CP Test');


    // Step 5: File attachment step (between Step 5 and 6)
    cy.get(env.deliverableFileInput, { timeout: 10000 })
    .should('be.visible')
    .attachFile('TicketUpload.xlsx', { force: true });
  cy.log('✅ File TicketUpload.xlsx attached successfully');

  // Step 6: Click "Upload File" button
  cy.contains('button', 'Upload File').should('be.visible').click();
  cy.log('✅ Success: Clicked "Upload File"');

// Step 6: Confirm success message
cy.get("div[aria-label='Uploaded Successfully']", { timeout: 30000 }).should('be.visible');
cy.log('✅ Success: Upload confirmed');

  // Step 1: Click My Tickets
  cy.get(env.clientPortal.MyTicketsLink).should('be.visible').click();
  cy.log('✅ Success: Clicked My Tickets');

}
