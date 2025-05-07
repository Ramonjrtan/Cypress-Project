//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions (alphabetically)
import { cp_addticket } from '../support/CP_CreateTicketGroups';
import { cp_login } from '../support/CP_LoginGroups';

//  Test block
describe('Client Portal - Add Ticket Flow', () => {
  it('should successfully add a new ticket through the Client Portal', () => {
    cy.viewport(1920, 1080);

    // Step 1: Log in to the Client Portal
    cp_login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Step 2: Wait for the dashboard to load
    cy.get(env.cpDashboard, { timeout: 50000 }).should('be.visible');
    cy.log('✅ Dashboard is visible');

    // Step 3: Add a new ticket
    cp_addticket();
    cy.log('✅ Ticket added');

    // Step 4: Navigate to My Tickets and extract ticket number
    cy.get(env.cpMyTicketsLink).should('be.visible').click();
    cy.log('✅ Success: Clicked My Tickets');

    cy.contains('h1', 'My Tickets', { timeout: 60000 }).should("be.visible");
    cy.log('✅ Success: My Tickets page loaded');

    cy.get('.ticket-no').first()
      .invoke('text')
      .then((cpticketTitle) => {
        cy.log('Full text: ' + cpticketTitle);
        const cpticketNumber = cpticketTitle.trim().split(',')[1]; // e.g. 'FSDP-2706-239175'
        cy.wrap(cpticketNumber).as('cpTicketNumber');
        cy.log('✅ Ticket Number: ' + cpticketNumber);
      });
  });
});
