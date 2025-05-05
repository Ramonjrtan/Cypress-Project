import env from '../../cypress.env.json';

export function navigate_contract() {
  // Step 1: Navigate to the contract details page
  cy.visit(env.contractDetailsPage);

  // Step 2: Ensure the page is fully loaded
  cy.get(env.contractHeader, { timeout: 60000 })
    .should('be.visible')
    .and('contain', 'Contract Details');
}
