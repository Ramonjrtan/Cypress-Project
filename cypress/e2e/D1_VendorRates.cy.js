import { login } from "../support/D1_LoginGroups";
import { d1_addvendorrates } from "../support/D1_AddVendorRatesGroups";
import { d1_editvendorrates } from "../support/D1_EditVendorRatesGroups";
import { d1_deletevendorrates } from "../support/D1_DeleteVendorRatesGroups";
import env from '../../cypress.env.json';

describe('Add, Edit, Delete Vendor Rates', () => {

  it('should login and navigate to dashboard',() => {
    cy.viewport(1920, 1080);
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should('be.visible')
      .and('contain', 'Task Dashboard');
    cy.log('✅ Task Dashboard loaded');


    // Step 2: Navigate to contract
    d1_addvendorrates(); // Assumes internal validation
    cy.log('✅ Vendor Rates added');


    // Step 3: Edit the vendor rate
    d1_editvendorrates(); // Assumes internal validation
    cy.log('✅ Vendor Rates edited successfully');

    // Step 4: Delete the vendor rate
    d1_deletevendorrates(); // Assumes internal validation
    cy.log('✅ Vendor Rates deleted successfully');

});
});
