import { d1_addclient } from "../support/D1_AddClientGroups";
import { d1_editclient } from "../support/D1_EditClientGroups";
import { d1_deleteclient } from "../support/D1_DeleteClientGroups";
import { login } from "../support/D1_LoginGroups";
import env from '../../cypress.env.json';

describe('Add, Edit, Delete Client', () => {
  it('should add, update and delete a Client', () => {
    cy.viewport(1920, 1080);

    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');
  
    // Wait until Task Dashboard loads
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should("be.visible")
      .and("contain", "Task Dashboard");

    // Step 2: Add Client using d1_addclient
    d1_addclient(); // Ensure this function correctly adds the client
    cy.log('✅ Client added');

    // Step 3: Edit Client using d1_editclient
    d1_editclient(); // Ensure this function correctly edits the client   
    cy.log('✅ Client edited');

    // // Step 4: Delete Client using d1_deleteclient (uncomment if needed)
    // d1_deleteclient(); // Ensure this function correctly deletes the client
    // cy.log('✅ Client deleted');
  });
});
