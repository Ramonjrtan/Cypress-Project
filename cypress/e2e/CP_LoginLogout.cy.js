//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions
import { cp_login } from '../support/CP_LoginGroups';

//  Test block
describe('Client Portal Login and Logout ', () => {
  it('should login and logout in Client Portal', () => {
    cy.viewport(1920, 1080);

    const { email, password } = env;

    // Step 1: Log in to Client Portal
    cp_login(email, password);
    cy.log('✅ Successfully logged in');

    // Step 2: Wait for dashboard to load
    cy.get(env.clientPortal.Dashboard, { timeout: 50000 }).should('be.visible');
    cy.log('✅ Dashboard is visible');

    // Step 3: Logout from Client Portal
    cy.get('.name').should('be.visible').click();
    cy.contains('Logout').should('be.visible').click();
    cy.wait(3000);

    // Additional test steps should follow here (e.g., visiting core site, cross-origin logic)
  });
});
