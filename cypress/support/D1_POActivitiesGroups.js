import env from '../../cypress.env.json';

export function po_activities() {
  // Step 1: Click the Activities tab
  cy.get(env.poTabButton)
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Step 2: Wait for the activities API call to complete
  cy.intercept('GET', '**/api/PurchaseOrder/**/activities').as('getActivities');
  cy.wait('@getActivities', { timeout: 30000 });

  // Step 3: Wait for the activity row to exist
  // cy.get(env.poActivityRow, { timeout: 15000 })
  //   .should('exist')
  //   .as('activityRow');

    cy.get('.table > tbody > tr.ng-star-inserted > :nth-child(2)')
        .should('exist')
    .as('activityRow');

  // Step 4: Click the activity row
  cy.get('@activityRow')
    .should('be.visible')
    .click();

  // Step 5: Wait for the checkbox to appear and click it
  cy.get(env.poActivityCheckbox, { timeout: 15000 })
    .should('exist')
    .should('be.visible')
    .click({ force: true });

  // Step 6: Check the checkbox if not already checked
  cy.get(env.poActivityCheckbox).then($checkbox => {
    if (!$checkbox.prop('checked')) {
      cy.get(env.poActivityCheckbox).check({ force: true });
    }
  });

  // Step 7: Enter "60" in the cost input field
  cy.get(env.poCostInput, { timeout: 15000 })
    .should('exist')
    .should('be.visible')
    .clear()
    .type('60');

  // Step 8: Click the Save button
  cy.get(env.poActivitySaveButton, { timeout: 15000 })
    .should('exist')
    .should('be.visible')
    .click();

  // Step 9: Verify success message appears
  cy.get(env.poActivitySuccessToast, { timeout: 10000 }) 
    .should('be.visible');

  // Step 10: Wait for success message to disappear
  cy.get(env.poActivitySuccessToast, { timeout: 10000 }) 
    .should('not.exist');

  cy.log("✅ PO activity successfully updated.");
}
