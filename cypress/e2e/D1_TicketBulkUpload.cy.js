//  Cypress & Environment
import env from '../../cypress.env.json';

//  Feature Support Functions
import { login } from "../support/D1_LoginGroups";
import { bulkupload_ticket } from "../support/D1_BulkUploadTicket";

//  Test block
describe('Bulk Upload D1 ticket', () => {
  it('should bulk upload tickets', () => {
    cy.viewport(1920, 1080);

    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Wait until Task Dashboard loads
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should("be.visible")
      .and("contain", "Task Dashboard");

    // Step 4: Add location
    bulkupload_ticket(); // Ensure this function correctly adds the location
    cy.log('✅ Tickets added');
  });
});
