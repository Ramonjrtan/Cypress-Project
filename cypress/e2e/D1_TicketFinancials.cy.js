//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions
import { login } from '../support/D1_LoginGroups';
import { navigate_contract } from '../support/D1_ContractGroups';
import { add_ticket } from '../support/D1_AddTicketGroups';
import { edit_ticket } from '../support/D1_EditTicketGroups';
import { add_site } from '../support/D1_AddSiteGroups';
import { add_activity } from '../support/D1_AddActivityGroups';
import { add_schedule } from '../support/D1_AddScheduleGroups';
import { po_scope } from '../support/D1_POScopeGroups';
import { po_activities } from '../support/D1_POActivitiesGroups';
import { po_assigntech } from '../support/D1_POAssignTech.Groups';
import { po_deliverables } from '../support/D1_PODeliverablesGroups';
import { ticket_financials } from '../support/D1_TicketFinancialsGroup';
import { edit_po } from '../support/D1_EditPOGroup';


//  Test block
describe('Verify ticket Financials', () => {
  it('should verify Ticket Total Price and Total Authorized Cost', () => {
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

    // // Step 3: Add a new ticket
    // add_ticket();
    // cy.log('✅ Ticket added');

    // Step 4: Edit the ticket
    edit_ticket();
    cy.log('✅ Ticket edited');

    // // Step 5: Add site
    // add_site();
    // cy.log('✅ Site added');

    // // Step 6: Add activity
    // add_activity();
    // cy.log('✅ Activity added');

    // // Step 7: Add schedule
    // add_schedule();
    // cy.log('✅ Schedule added');

    // Step 8: Click on Buy tab
    edit_po();
    cy.log('✅ Buy tab clicked');

    // Step 13: Add PO Scope
    po_scope();
    cy.log('✅ PO Scope added');

    // Step 14: Add PO Activity
    po_activities();
    cy.log('✅ PO Activity added');

    // Step 15: Add PO Deliverables
    po_deliverables();
    cy.log('✅ PO Deliverables added');

    // Step 16: Assign Technician
    po_assigntech();
    cy.log('✅ PO Assigned Technician');

    // Step 17: Verify Ticket Financials
    ticket_financials();
    cy.log('✅ Ticket financials verified');

    cy.wait(5000); // Wait for any asynchronous operations to complete
    cy.log('✅ Test completed successfully');``
  });
});
