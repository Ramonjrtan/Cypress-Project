import env from '../../cypress.env.json';

export function activitybcsync() {
  // Wait to allow backend sync to complete (consider replacing with a smarter wait later)
  cy.wait(5000);

  // Reload to ensure fresh DOM state
  cy.reload();

  // Step 1: Confirm Ticket BC Synced badge is visible
  cy.get('button.normal.show-button mat-icon[role="img"]', { timeout: 60000 })
    .should('be.visible');
  cy.log('✅ Ticket BC Synced badge is visible');

  // Step 2: Confirm Activity BC Synced badge is visible
  cy.get('.badge.bc-synced')
    .should('be.visible');
  cy.log('✅ Activity BC Synced badge is visible');
}
