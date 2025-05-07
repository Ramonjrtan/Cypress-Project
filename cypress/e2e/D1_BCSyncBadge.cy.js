//  Cypress & Environment
import env from '../../cypress.env.json';
import 'cypress-wait-until';

//  Feature Support Functions (alphabetically)
import { activitybcsync } from '../support/D1_ActivityBCSyncGroups';
import { add_activity } from '../support/D1_AddActivityGroups';
import { add_schedule } from '../support/D1_AddScheduleGroups';
import { add_site } from '../support/D1_AddSiteGroups';
import { add_ticket } from '../support/D1_AddTicketGroups';
import { addticketbcsync } from '../support/D1_AddTicketBCSyncGroups';
import { edit_ticket } from '../support/D1_EditTicketGroups';
import { login } from '../support/D1_LoginGroups';
import { navigate_contract } from '../support/D1_ContractGroups';
import { po_activities } from '../support/D1_POActivitiesGroups';
import { po_assigntech } from '../support/D1_POAssignTech.Groups';
import { po_deliverables } from '../support/D1_PODeliverablesGroups';
import { po_reviewtech } from '../support/D1_ReviewTechGroups';
import { po_scope } from '../support/D1_POScopeGroups';
import { podetailsbcsync } from '../support/D1_PODetailsBCSyncGroups';
import { searchpagebcsync } from '../support/D1_SearchPageBCSyncGroups';

//  Test block
describe('BC Sync Badge', () => {
  it('should show BC Sync Badge properly', () => {
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

    // Step 5: Verify Ticket BC Sync badge
    addticketbcsync();
    cy.log('✅ Ticket BC Sync badge is visible');

    // Step 6: Add site
    add_site();
    cy.log('✅ Site added');

    // Step 7: Add activity
    add_activity();
    cy.log('✅ Activity added');

    // Step 8: Verify Activity BC Sync badge
    activitybcsync();
    cy.log('✅ Activity BC Sync badge is visible');

    // Step 9: Add schedule
    add_schedule();
    cy.log('✅ Schedule added');

    // Step 10: Click on Buy tab
    cy.get(env.buyTabIcon)
      .contains(env.buyTabText)
      .should('be.visible')
      .click();

    // Step 11: Wait until the page loads completely
    cy.contains(env.stagedLabel, 'Staged', { timeout: 10000 })
      .should('be.visible');

    // Step 12: Click on Edit PO button
    cy.get(env.editPOIcon)
      .contains('edit')
      .first()
      .click();

    // Step 13: Ensure modal appears
    cy.get(env.modalContainerLg, { timeout: 20000 })
      .should('exist')
      .and('be.visible');

    // Step 14: Ensure modal header appears
    cy.get(env.modalHeaderPO)
      .should('contain', 'Edit PO/WO');

    // Step 15: Add PO Scope
    po_scope();
    cy.log('✅ PO Scope added');

    // Step 16: Add PO Activity
    po_activities();
    cy.log('✅ PO Activity added');

    // Step 17: Add PO Deliverables
    po_deliverables();
    cy.log('✅ PO Deliverables added');

    // Step 18: Assign Technician
    po_assigntech();
    cy.log('✅ PO Assigned Technician');

    // Step 19: Verify PO Details BC Sync badge
    podetailsbcsync();
    cy.log('✅ PO Details BC Sync badge is visible');

    // // Step 20: Review technician
    // po_reviewtech();
    // cy.log('✅ Review technician');

     // Step 2: Navigate to contract
    navigate_contract();
    cy.log('✅ Navigated to contract');

    //searchpagebcsync();
    searchpagebcsync();
    cy.log('✅ BC Sync badge is visible in search page');
  });
});
