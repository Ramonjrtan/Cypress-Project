import { login } from "../support/D1_LoginGroups";
import { d1_addvendor } from "../support/D1_AddVendorGroups";
import { d1_editvendor } from "../support/D1_EditVendorGroups";
import { d1_deletevendor } from "../support/D1_DeleteVendorGroups";
import env from '../../cypress.env.json';

describe('Add, Edit, Delete Vendors', () => {
  it('should add, edit, and delete a vendor', () => {
    cy.viewport(1920, 1080);

    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Step 2: Wait for Task Dashboard to load
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should('be.visible')
      .and('contain', 'Task Dashboard');
    cy.log('✅ Task Dashboard loaded');

    // Step 3: Add Vendor
    d1_addvendor(); // Make sure this function includes all necessary validations
    cy.log('✅ Vendor added');

    cy.reload(); // Refresh the page to ensure all changes are visible
    cy.wait(5000); // Wait for the page to refresh and load completely
    

    // Step 4: Edit Vendor
    d1_editvendor(); // Make sure this function includes all necessary validations
    cy.log('✅ Vendor edited');

    cy.reload(); // Refresh the page to ensure all changes are visible
    cy.wait(5000); // Wait for the page to refresh and load completely
    

    // Step 5: Delete Vendor
    d1_deletevendor(); // Make sure this function includes all necessary validations
    cy.log('✅ Vendor deleted');
  });
});
