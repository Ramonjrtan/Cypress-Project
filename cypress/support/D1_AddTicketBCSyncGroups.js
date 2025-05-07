import env from '../../cypress.env.json';

export function addticketbcsync() {
  // Optional wait to allow the UI to settle (replace with better wait if possible)
  cy.wait(5000);

  // Step: Verify that the BC Synced badge (normal state) is visible
  cy.get('button.normal.show-button mat-icon[role="img"]', { timeout: 60000 })
    .should('be.visible');
    
  cy.log('✅ Ticket BC Synced badge is visible');
}
