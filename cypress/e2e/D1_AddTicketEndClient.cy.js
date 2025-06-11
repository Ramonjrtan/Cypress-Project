//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions (alphabetically)
import { login } from '../support/D1_LoginGroups';
import { navigate_contract } from '../support/D1_ContractGroups';
import { add_ticketendclient } from '../support/D1_AddTicketEndClientGroup';


//  Test block
describe('Add ticket, Select End Client', () => {
    
  it('should add ticket, should select valid end client', () => {
    cy.viewport(1920, 1080);
    
    // Step 1: Perform login
    login(env.email, env.password);
    cy.log('✅ Successfully logged in');

    // Wait until Task Dashboard loads
    cy.get(env.taskDashboardHeader, { timeout: 60000 })
      .should("be.visible")
      .and("contain", "Task Dashboard");

    // Step 2: Navigate to contract
    navigate_contract();
    cy.log('✅ Navigated to contract');

    // Step 3: Add a new ticket
    add_ticketendclient();
    cy.log('✅ Ticket added');

  });
});
