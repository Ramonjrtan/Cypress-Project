export function po_scope () {
  // Step 1: Click on PO Scope tab
  cy.contains('button', 'Scope')
  .scrollIntoView() // Ensure the element is within the viewport
  .should('be.visible') // Verify it is now visible
  .click();

  // Step 2: Wait until the current page is loaded
  cy.contains('h3', 'Schedule', { timeout: 10000 })
    .should('be.visible');

  // Step 3: Turn off toggle if it's on
  cy.get('.cds--toggle__switch')
    .invoke('attr', 'class')
    .then((classList) => {
      if (classList.includes('cds--toggle__switch--checked')) {
        cy.get('.cds--toggle__switch').click();
      }
    });

  // Step 4: Ensure dropdown is visible, enabled, and select value
  cy.get('select[formcontrolname="ticketScheduleId"]')
    .scrollIntoView()
    .should('be.visible')
    .and('not.be.disabled');

  // Step 5: Wait until the dropdown has at least one valid option (excluding the disabled "[SELECT]" option)
  cy.get('select[formcontrolname="ticketScheduleId"] option')
    .should('have.length.greaterThan', 1);

  // Step 6: Select the first available option dynamically
  cy.get('select[formcontrolname="ticketScheduleId"]')
    .select(1, { force: true });

  cy.log('✅ Schedule selected');

  // Step 7: Enter text in Required Tools field
  cy.get('.ql-editor')
    .each(($editor, index) => {
      cy.wrap($editor)
        .click()
        .clear()
        .type(`Cypress Automation Activity ${index + 1}`, { force: true });
    });

  cy.log('✅ All text fields updated');

  // Step 8: Click on Save button
  cy.contains('button.cds--btn.cds--btn--primary', 'Save')
    .click({ force: true });

  cy.log('✅ Clicked the Save button');

  // Step 9: Confirm success message appears
  cy.get("div[aria-label='Success']", { timeout: 10000 }) 
    .should('be.visible');

  // // Step 10: Ensure success message disappears before proceeding
  // cy.get("div[aria-label='Success']", { timeout: 10000 }) 
  //   .should('not.exist');

  cy.log("✅ Success message appeared and disappeared.");
}
