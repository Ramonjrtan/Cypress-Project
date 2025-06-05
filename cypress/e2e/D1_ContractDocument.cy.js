//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions (alphabetically)
import { login } from '../support/D1_LoginGroups';
import { contract_upload } from '../support/D1_ContractUploadGroup';

//  Test block
describe('Contract Document Upload', () => {
  it('should upload a document in Contract', () => {
    cy.viewport(1920, 1080);
    
    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Wait until Task Dashboard loads
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should("be.visible")
      .and("contain", "Task Dashboard");

    // Step 3: Click on the "Documents" tab and upload
    contract_upload();
    cy.log('✅ Contract document uploaded');
  });
});
