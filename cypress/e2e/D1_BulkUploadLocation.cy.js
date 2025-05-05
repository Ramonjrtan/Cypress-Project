import { login } from "../support/D1_LoginGroups";
import { d1_bulkuploadlocaton } from "../support/D1_BulkUploadLocation";
import env from '../../cypress.env.json';

describe('Bulk Upload Client Location', () => {

  beforeEach(function(){
    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');
  })

  it('should bulk upload client location', () => {
    cy.viewport(1920, 1080);

    // Wait until Task Dashboard loads
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should("be.visible")
      .and("contain", "Task Dashboard");

    // Step 4: Add location
    d1_bulkuploadlocaton(); // Ensure this function correctly adds the location
    cy.log('✅ Location added');
  });
});
