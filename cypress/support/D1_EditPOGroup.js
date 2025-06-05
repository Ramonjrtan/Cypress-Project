import env from '../../cypress.env.json';

export function edit_po() {
  // Step 1: Click on the Buy tab
  cy.get(env.buyTabIcon)
    .should('be.visible')
    .contains(env.buyTabText)
    .click();

  // Step 2: Wait for the 'Staged' label to appear to ensure the page has loaded
  cy.contains(env.stagedLabel, 'Staged', { timeout: 10000 })
    .should('be.visible');

  // Step 3: Click the first available Edit PO button
  cy.get(env.editPOIcon)
    .contains('edit')
    .first()
    .click();

  // Step 4: Wait for the large modal container to be visible
  cy.get(env.modalContainerLg, { timeout: 20000 })
    .should('exist')
    .and('be.visible');

  // Step 5: Verify the modal header contains 'Edit PO/WO'
  cy.get(env.modalHeaderPO)
    .should('be.visible')
    .and('contain', 'Edit PO/WO');
}
