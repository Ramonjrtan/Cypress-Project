import env from '../../cypress.env.json';

export function edit_team() {
  cy.wait(5000);

  // Step 1: Visit Team Management page
  cy.visit('https://core.dispatch1.com/general/settings/manage-teams');
  cy.get('.custom-card > .title', { timeout: 20000 })
    .should('be.visible')
    .and('contain', 'Team Management');
  cy.log('✅ Successfully navigated to Team Management page');

  // Step 2: Search Team
  const savedName = Cypress.env('savedTeamName');
  cy.get(env.Teams.SearchTeamInput).type(savedName);
  cy.log(`✅ Searched for team: ${savedName}`);

  // Step 3: Wait until searched Title element shows correctly (assuming it contains the team name)
  cy.contains(env.Teams.TeamTitleCell, savedName, { timeout: 10000 })
    .should('be.visible');
  cy.log('✅ Searched team title is visible');

  // Step 4: Click edit icon for the searched team
  cy.get(env.Teams.EditIcon).click();
  cy.log('✅ Successfully clicked on the Edit icon for the saved team');

  cy.wait(5000);

  // Step 5: Add new team from the dropdown
  cy.get(env.Teams.TeamMemberDropdown).type('Ramon-Tan', { timeout: 20000 })
    .type('{enter}', { timeout: 20000 });
  cy.log('✅ Selected "Ramon-Tan" from dropdown');

  // Step 6: Click Update button
  cy.get(env.Teams.UpdateButton).click();
  cy.log('✅ Clicked the Update button');

  // Step 7: Verify toast message appears and disappears
  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 })
    .should('be.visible')
    .and('contain', 'Updated Successfully');
  cy.log('✅ Toast message: Updated Successfully');

  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Toast message disappeared');
}
