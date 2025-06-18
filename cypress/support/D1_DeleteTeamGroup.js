//  Cypress & Environment
import env from '../../cypress.env.json';

export function delete_team() {
  cy.wait(5000);

  // Step 1: Visit Team Management page
  cy.visit(env.Teams.TeamManagementPage);
  cy.get('.custom-card > .title', { timeout: 20000 })
    .should('be.visible')
    .and('contain', 'Team Management');
  cy.log('✅ Successfully navigated to Team Management page');

  // Step 2: Search Team
  const savedName = Cypress.env('savedTeamName');
  cy.get(env.Teams.SearchTeamInput).type(savedName);
  cy.log(`✅ Searched for team: ${savedName}`);

  // Step 3: Wait until searched Title element shows correctly (assuming it contains the team name)
  cy.get(env.Teams.TeamTitleCell, { timeout: 10000 }).contains(savedName)
    .should('be.visible');
  cy.log('✅ Searched team title is visible');

  // Step 4: Click delete icon for the searched team
  cy.get(env.Teams.DeleteIcon).click();
  cy.log('✅ Successfully clicked on the Delete icon');

  // Step 5: Click Delete button
  cy.get(env.Teams.DeleteButton).click();
  cy.log('✅ Clicked the Delete button');

  // Step 6: Verify toast message appears and disappears
  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 })
    .should('be.visible')
    .and('contain', 'Deleted Successfully');
  cy.log('✅ Toast message: Deleted Successfully');

  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Toast message disappeared');

  // Step 7: Visit Team Management page again
  cy.visit(env.Teams.TeamManagementPage);
  cy.get('.custom-card > .title', { timeout: 20000 })
    .should('be.visible')
    .and('contain', 'Team Management');
  cy.log('✅ Successfully navigated to Team Management page');

  // Step 8: Search Team
  cy.get(env.Teams.SearchTeamInput).type(savedName);
  cy.log(`✅ Searched for team: ${savedName}`);

  // Step 9: Verify no data message is visible
  cy.get('.nodata').should('be.visible');
  cy.log('✅ No data message is visible');
}
