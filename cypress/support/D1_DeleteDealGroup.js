//  Cypress & Environment
import env from '../../cypress.env.json';

export function delete_deal() {
  cy.wait(5000);

  // Step 1: Go to Deals page
  cy.visit(env.Deals.DealsPageURL);
  cy.log('✅ Successfully navigated to Deals page');

  // Step 2: Ensure header appears
  cy.get(env.Deals.DealPageHeader, { timeout: 20000 })
    .contains('Deal')
    .should('be.visible');
  cy.log('✅ Deal page header is visible');

  cy.wait(10000);

  cy.get(env.Deals.DealSearchInput)
    .should('be.visible')
    .type('Cypress Test Deal', { force: true })
    .type('{enter}');
  cy.log('✅ Deal search input is visible and deal name entered');

  cy.wait(10000);

  // Step 3: Click the "Delete Deal" button
  cy.get(env.Deals.DeleteDealButton).click();

  cy.wait(5000);

  cy.get(env.Deals.ConfirmDeleteButton)
    .should('be.visible')
    .click();
  cy.log('✅ Successfully Clicked Delete Deal Button');

  cy.contains(env.Deals.DealDeletionSuccessMessage, { timeout: 10000 })
    .should('be.visible');
  cy.log('✅ Deal deletion success message is visible');

  // Step 4: Ensure success message disappears before proceeding
  cy.contains(env.Deals.DealDeletionSuccessMessage, { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Verified success message disappeared');
}
