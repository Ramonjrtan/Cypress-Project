import env from '../../cypress.env.json';

export function podetailsbcsync() {
  // Wait for the page to load partially synced PO badge
  cy.wait(5000);

  // Step 1: Verify Partial BC Synced badge is visible and click it
  cy.get('button.warning.show-button mat-icon[role="img"]', { timeout: 60000 })
    .should('be.visible')
    .click({ force: true });
  cy.log('✅ Partial BC Synced badge clicked');

  // Step 2: Reload the page to reflect updated sync status
  cy.reload();

  // Step 3: Check if Ticket BC Synced badge is visible
  cy.get('button.normal.show-button mat-icon[role="img"]', { timeout: 60000 })
    .should('be.visible');
  cy.log('✅ Ticket BC Synced badge is visible');

  // Step 4: Verify PO BC Synced badge is visible
  cy.get('.badge.bc-synced', { timeout: 10000 })
    .should('be.visible');
  cy.log('✅ PO BC Synced badge is visible');
}
