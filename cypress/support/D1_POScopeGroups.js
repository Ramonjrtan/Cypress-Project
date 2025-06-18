//  Cypress & Environment
import env from '../../cypress.env.json';

export function po_scope() {
  // Step 1: Click on PO Scope tab
  cy.contains(env.poScopeTabButton, 'Scope')
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Step 2: Wait until the current page is loaded
  cy.contains(env.poScopeHeader, 'Schedule', { timeout: 10000 })
    .should('be.visible');

  // Step 3: Turn off toggle if it's on
  cy.get(env.poScopeToggle)
    .invoke('attr', 'class')
    .then((classList) => {
      if (classList.includes('cds--toggle__switch--checked')) {
        cy.get(env.poScopeToggle).click();
      }
    });

  // Step 4: Ensure dropdown is visible, enabled, and select value
  cy.get(env.poScopeScheduleDropdown)
    .scrollIntoView()
    .should('be.visible')
    .and('not.be.disabled');

  // Step 5: Wait until the dropdown has at least one valid option
  cy.get(env.poScopeDropdownOption)
    .should('have.length.greaterThan', 1);

  // Step 6: Select the first available option dynamically
  cy.get(env.poScopeScheduleDropdown)
    .select(1, { force: true });

  cy.log('✅ Schedule selected');

  // Step 7: Enter text in Required Tools field
  cy.get(env.poScopeTextEditor)
    .each(($editor, index) => {
      cy.wrap($editor)
        .click()
        .clear()
        .type(`Cypress Automation Activity ${index + 1}`, { force: true });
    });

  cy.log('✅ All text fields updated');

  // Step 8: Click on Save button
  cy.contains(env.poScopeSaveButton, 'Save')
    .click({ force: true });

  cy.log('✅ Clicked the Save button');

  // Step 9: Confirm success message appears
  cy.get(env.poScopeSuccessMessage, { timeout: 10000 }) 
    .should('be.visible');

  // Step 10: Ensure success message disappears before proceeding
  cy.get(env.poScopeSuccessMessage, { timeout: 10000 }) 
    .should('not.exist');

  cy.log("✅ Success message appeared and disappeared.");
}
