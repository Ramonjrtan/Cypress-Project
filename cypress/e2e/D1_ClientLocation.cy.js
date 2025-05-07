//  Cypress & Environment
import env from '../../cypress.env.json';

//  Feature Support Functions (alphabetically)
import { d1_addlocation } from '../support/D1_AddLocationGroups';
import { d1_deletelocation } from '../support/D1_DeleteLocationGroups';
import { d1_editlocation } from '../support/D1_EditLocationGroups';
import { login } from "../support/D1_LoginGroups";

//  Test block
describe('Add, Edit, Delete Location', () => {
  it('should add, update, and delete a Location', () => {
    cy.viewport(1920, 1080);

    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Wait until Task Dashboard loads
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should("be.visible")
      .and("contain", "Task Dashboard");

    // Step 2: Add location
    d1_addlocation(); // Ensure this function correctly adds the location
    cy.log('✅ Location added');

    // Step 3: Edit location (Optional)
    d1_editlocation();
    cy.log('✅ Location edited');

    // Step 4: Delete location
    d1_deletelocation();
    cy.log('✅ Location deleted');
  });
});
