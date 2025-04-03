import { cp_login } from '../support/CPLoginGroups';
import { cp_addticket } from '../support/CPCreateTicketGroups';
import 'cypress-wait-until';

describe('Add ticket in Client Portal', () => {
  it('should add ticket', () => {
    cy.viewport(1920, 1080);

    // Step 1: Perform login
    cp_login(Cypress.env('email'), Cypress.env('password'));
    cy.log('✅ Successfully logged in');

    // Wait until Task Dashboard loads
    cy.get('a[routerlink="/Dashboard"]', { timeout: 60000 })
    .should("be.visible")
    .and("contain", "Dashboard");

    // Step 3: Add a new ticket
    cp_addticket();
    cy.log('✅ Ticket added');

    
  });
});
