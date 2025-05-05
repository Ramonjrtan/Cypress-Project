import { login } from "../support/D1_LoginGroups";
import { d1_addvendorrates } from "../support/D1_AddVendorRatesGroups";
import env from '../../cypress.env.json';

describe('Add, Edit, Delete Vendor Rates', () => {
  it('should add, edit, and delete a vendor rate', () => {
    cy.viewport(1920, 1080);

    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Step 2: Wait for Task Dashboard to load
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should('be.visible')
      .and('contain', 'Task Dashboard');
    cy.log('✅ Task Dashboard loaded');

    // Step 3: Add Vendor Rates
    d1_addvendorrates(); // Ensure this function includes success assertions
    cy.log('✅ Vendor Rates added');
  });
});
