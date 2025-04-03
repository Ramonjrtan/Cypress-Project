import { login } from '../support/LoginGroups';
import { navigate_contract } from '../support/ContractGroups';
import { add_ticket } from '../support/AddTicketGroups';
import { edit_ticket } from '../support/EditTicketGroups';
import { add_site } from '../support/AddSiteGroups';
import { add_activity } from '../support/AddActivityGroups';
import { add_schedule } from '../support/AddScheduleGroups';
import { po_scope } from '../support/POScopeGroups';
import { po_activities } from '../support/POActivitiesGroups';
import { po_assigntech } from '../support/POAssignTech.Groups';
import { po_deliverables } from '../support/PODeliverablesGroups';
import { po_reviewtech } from '../support/ReviewTechGroups';
import 'cypress-wait-until';

describe('Add ticket, update details, PO details, assign and review technician', () => {
  it('should add ticket, update details, PO details, assign and review technician', () => {
    cy.viewport(1920, 1080);

    // Step 1: Perform login
    login(Cypress.env('email'), Cypress.env('password'));
    cy.log('✅ Successfully logged in');

    //Wait until Task Dashboard load
    cy.get("div.header-wrapper h1", { timeout: 60000 })
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

    // Step 8: Click on Buy tab
    cy.get('.mat-icon')
      .contains('shopping_cart')
      .should('be.visible')
      .click();

    // Step 9: Wait until the page loads completely
    cy.contains('app-legacy-status-label', 'Staged', { timeout: 10000 })
      .should('be.visible');

    // Step 10: Click on Edit PO button
    cy.get('tbody tr:first-child mat-icon')
      .contains('edit')
      .first()
      .click();

    // Step 11: Ensure modal appears
    cy.get('.cds--modal-container.cds--modal-container--lg', { timeout: 20000 })
      .should('exist')
      .and('be.visible');

    // Step 12: Ensure modal header appears
    cy.get('h4.card-title')
      .should('contain', 'Edit PO/WO');

          // Step 14: Add PO Scope
    po_scope();
    cy.log('✅ PO Scope added');

     // Step 13: Add PO Activity
    po_activities();
    cy.log('✅ PO Activity added');


        // Step 15: Add PO Deliverables
    po_deliverables();
    cy.log('✅ PO Deliverables added');

    // Step 16: Assign Technician
    po_assigntech();
    cy.log('✅ PO Assigned Technician');

    //Step 17: Review technician
    po_reviewtech();
    cy.log('✅ Review technician');
    
  });
});
