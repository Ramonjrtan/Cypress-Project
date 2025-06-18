//  Cypress & Environment
import env from '../../cypress.env.json';

export function add_team() {
  cy.wait(5000);

  // Step 1: Visit Team Management page
  cy.visit(env.Teams.TeamManagementPage);
  cy.get('.custom-card > .title', { timeout: 20000 })
    .should('be.visible')
    .and('contain', 'Team Management');
  cy.log('✅ Successfully navigated to Team Management page');

  // Step 2: Click on the Add Team button
  cy.get(env.Teams.AddTeamButton).click();
  cy.log('✅ Successfully clicked on the Add Team button');

  // Step 3: Generate random team name and email
  const randomId = Math.floor(Math.random() * 10000);
  const teamName = `Cypress Test Team ${randomId}`;
  Cypress.env('savedTeamName', teamName); // Save to env for later use
  const randomEmail = `cypresstestteam${randomId}@gmail.com`;
  Cypress.env('savedTeamEmail', randomEmail); // Save to env for later use

  // Step 4: Fill "Team Name" input
  cy.get(env.Teams.TeamNameInput).click().type(teamName);
  cy.log(`✅ Entered Team Name: ${teamName}`);

  // Step 5: Fill "Email" input
  cy.get(env.Teams.TeamEmailInput).click().type(randomEmail);
  cy.log(`✅ Entered Email: ${randomEmail}`);

  // Step 6: Fill combobox and press Enter
  cy.get(env.Teams.TeamMemberCombobox).click().type('Ramon PC', { timeout: 20000 })
    .type('{enter}', { timeout: 20000 });
  cy.get('.ng-option-label').click();
  cy.log('✅ Selected from combobox: Ramon PC');

  // Step 7: Select from dropdown
  cy.get(env.Teams.TeamLeadDropdown).select('Ramon PC');
  cy.log('✅ Selected dropdown option by visible text: Ramon PC');

  // Step 8: Click Save button
  cy.get(env.Teams.SaveButton).contains('Save').click();
  cy.log('✅ Clicked the Save button');

  // Step 9: Verify toast message appears and disappears
  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 })
    .should('be.visible')
    .and('contain', 'Saved Successfully');
  cy.log('✅ Toast message: Saved Successfully');

  cy.get(env.vendorRates.ToastMessageContainer, { timeout: 10000 })
    .should('not.exist');
  cy.log('✅ Toast message disappeared');

  // Step 10: Visit Team Management page again
  cy.visit(env.Teams.TeamManagementPage);
  cy.get('.custom-card > .title', { timeout: 20000 })
    .should('be.visible')
    .and('contain', 'Team Management');
  cy.log('✅ Successfully navigated to Team Management page');

  // Step 11: Search Team
  const savedName = Cypress.env('savedTeamName');
  cy.get(env.Teams.SearchTeamInput).type(savedName);
  cy.log(`✅ Searched for team: ${savedName}`);

  // Step 12: Wait until searched Title element shows correctly (assuming it contains the team name)
  cy.contains(env.Teams.TeamTitleCell, savedName, { timeout: 10000 })
    .should('be.visible');
  cy.log('✅ Searched team title is visible');

  // Step 13: Verify searched team email is visible
  const teamEmail = Cypress.env('savedTeamEmail');
  cy.get(env.Teams.TeamEmailCell, { timeout: 10000 }).contains(teamEmail)
    .should('be.visible');
  cy.log('✅ Searched team email is visible');
}
