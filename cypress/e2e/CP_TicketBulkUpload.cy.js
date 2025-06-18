//  Cypress & Environment
import 'cypress-wait-until';
import env from '../../cypress.env.json';

//  Feature Support Functions
import { cp_login } from '../support/CP_LoginGroups';
import { cp_ticketbulkupload } from '../support/CP_TicketBulkUploadGroups';

//  Test block
describe('Client Portal - Add location', () => {
  it('should successfully add a new location through the Client Portal', () => {
    cy.viewport(1920, 1080);

    // Step 1: Log in to the Client Portal
    cp_login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Step 2: Wait for the dashboard to load
    cy.get(env.clientPortal.Dashboard, { timeout: 50000 }).should('be.visible');
    cy.log('✅ Dashboard is visible');

    // Step 3: Bulk upload ticket
    cp_ticketbulkupload();
    cy.log('✅ Ticket bulk upload completed successfully');
  });
});
