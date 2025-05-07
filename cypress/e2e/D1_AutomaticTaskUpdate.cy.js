import { login } from '../support/D1_LoginGroups';
import { navigate_contract } from '../support/D1_ContractGroups';
import { add_ticket } from '../support/D1_AddTicketGroups';
import { edit_ticket } from '../support/D1_EditTicketGroups';
import { add_site } from '../support/D1_AddSiteGroups';
import { add_activity } from '../support/D1_AddActivityGroups';
import { add_schedule } from '../support/D1_AddScheduleGroups';
import env from '../../cypress.env.json';
import 'cypress-wait-until';

describe('Add ticket, update details, PO details, assign and review technician', () => {
    
  it('should add ticket, update details, PO details, assign and review technician', () => {
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
    add_ticket();
    cy.log('✅ Ticket added');

    // Step 4: Edit the ticket
    edit_ticket();
    cy.log('✅ Ticket edited');

    // Step 5: Add site
    add_site();
    cy.log('✅ Site added');

    // Step 6: Add activity
    add_activity();
    cy.log('✅ Activity added');

    // Step 7: Add schedule
    add_schedule();
    cy.log('✅ Schedule added');

 
  });
});
