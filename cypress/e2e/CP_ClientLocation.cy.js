// 🔁 Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

// ✅ Feature Support Functions (alphabetically)
import { cp_addclientlocation } from '../support/CP_AddClientLocationGroups';
import { cp_editdeletelocation } from '../support/CP_EditDeleteLocationGroups';
import { cp_login } from '../support/CP_LoginGroups';

// 📦 Test block
describe('Client Portal - Add location', () => {
  it('should successfully add a new location through the Client Portal', () => {
    cy.viewport(1920, 1080);

    // Step 1: Log in to the Client Portal
    cp_login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Step 2: Wait for the dashboard to load
    cy.get(env.cpDashboard, { timeout: 50000 }).should('be.visible');
    cy.log('✅ Dashboard is visible');

    // Step 3: Add a new location
    cp_addclientlocation();
    cy.log('✅ Location added via Locations tab');

    // Step 4: Edit and delete location
    cp_editdeletelocation();
    cy.log('✅ Location edited and deleted successfully');
  });
});
