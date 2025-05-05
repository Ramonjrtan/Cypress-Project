import env from '../../cypress.env.json';
import { navigate_contract } from '../support/D1_ContractGroups';
import dayjs from 'dayjs';
import 'cypress-file-upload';

export function bulkupload_ticket() {
  cy.wait(5000); // Optional wait

  navigate_contract();
  cy.log('✅ Navigated to contract');

  cy.get(env.uploadsTabButton, { timeout: 60000 })
    .should('be.visible')
    .click();
  cy.log('✅ Clicked on Uploads tab');

  cy.get(env.ticketsHeader, { timeout: 60000 })
    .should('contain', 'Ticket Uploads')
    .and('be.visible');
  cy.log('✅ Confirmed Tickets tab is fully loaded');

  cy.get(env.bulkUploadButton, { timeout: 10000 })
    .should('be.visible')
    .click();
  cy.log('✅ Clicked on Bulk Upload button');

  cy.get('[role="dialog"]', { timeout: 10000 })
    .should('exist')
    .and('be.visible');
  cy.log('✅ Modal popup is visible and ready');

  cy.get(env.bulkTicketHeader, { timeout: 10000 })
    .should('contain', 'Bulk Ticket Upload')
    .and('be.visible');
  cy.log('✅ Bulk Upload modal appeared');

  cy.get(env.bulkUploadName, { timeout: 10000 })
    .should('be.visible')
    .type('Cypress Test Ticket Bulk Upload');
  cy.log('✅ Entered bulk upload title');

  cy.get(env.deliverableFileInput, { timeout: 10000 })
    .should('be.visible')
    .attachFile('TicketUpload.xlsx', { force: true });
  cy.log('✅ File TicketUpload.xlsx attached successfully');

  cy.wait(5000); // Optional wait for file processing

  // Intercept the POST request to monitor upload status
  cy.intercept('POST', '**/api/status').as('uploadStatus');

  cy.get(env.uploadFileButton, { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click({ force: true });
  cy.log('✅ Clicked on Upload File button');

  // Wait for intercepted API response and assert it succeeded
  cy.wait('@uploadStatus').then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
    cy.log('✅ POST /api/status responded with 200');
  });

  cy.get('[role="dialog"]', { timeout: 15000 }).should('not.exist');
  cy.log('✅ Modal popup closed');

  cy.document().its('readyState').should('eq', 'complete');
  cy.log('✅ Page reloaded after modal closure');

  cy.get('tbody tr:first-child td:nth-child(6)', { timeout: 10000 })
    .should('be.visible');
  cy.log('✅ Success message row appeared');

  cy.get(env.d1Logo).trigger('mouseover');
  cy.log('✅ Hovered on D1 Logo');

  cy.get('tbody tr:first-child td:nth-child(6)', { timeout: 10000 })
    .should('contain.text', 'Successful');
  cy.log('✅ Status shows as Successful');

  const now = new Date();
  const formattedDate = dayjs().format('M/D/YY, h:mm A');

  cy.get('tbody tr:first-child td:nth-child(5)')
    .invoke('text')
    .then((text) => {
      expect(text.trim()).to.equal(formattedDate);
      cy.log(`✅ Upload Date: ${formattedDate}`);
    });
}
