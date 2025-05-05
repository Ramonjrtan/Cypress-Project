import { cp_login } from '../support/CP_LoginGroups';
import { cp_addclientlocation } from '../support/CP_AddClientLocationGroups';
import { cp_editdeletelocation } from '../support/CP_EditDeleteLocationGroups';
import 'cypress-wait-until';
import env from '../../cypress.env.json';

describe('Client Portal - Add location', () => {
  it('should successfully add a new location through the Client Portal', () => {
    cy.viewport(1920, 1080);

    // Step 1: Log in to the Client Portal
    cp_login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Step 2: Wait for the dashboard to load
    cy.get(env.cpDashboard, { timeout: 50000 }).should('be.visible');
    cy.log('✅ Dashboard is visible');

    // Step 3: Add a new ticket
    cp_addclientlocation();
    cy.log('✅ Locations tab opened');

    cp_editdeletelocation();
    cy.log('✅ Location edit and deleted successfully');





  });
});
