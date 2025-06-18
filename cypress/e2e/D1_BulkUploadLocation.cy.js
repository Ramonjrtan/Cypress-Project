//  Cypress & Environment
import env from '../../cypress.env.json';

//  Feature Support Functions
import { d1_bulkuploadlocaton } from "../support/D1_BulkUploadLocation";
import { login } from "../support/D1_LoginGroups";

//  Test Block
describe('Bulk Upload Client Location', () => {

  it('should bulk upload client location', () => {
    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    cy.viewport(1920, 1080);

    // Wait until Task Dashboard loads
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should("be.visible")
      .and("contain", "Task Dashboard");

    // Step 2: Add location
    d1_bulkuploadlocaton();
    cy.log('✅ Location added');
  });
});
