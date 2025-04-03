export function po_activities() {
  // Step 1: Wait for API calls to finish loading activities
  // cy.intercept('GET', '**/api/PurchaseOrder/**/activities').as('getActivities');
  // cy.wait('@getActivities', { timeout: 15000 });
  cy.get('#n-tab-1-header')
  .scrollIntoView() // Ensure the element is within the viewport
  .should('be.visible') // Verify it is now visible
  .click();
  
  cy.intercept('GET', '**/api/PurchaseOrder/**/activities').as('getActivities');
  cy.wait('@getActivities', { timeout: 30000 });

  // Step 2: Wait for the table row to exist before interacting
  cy.get('body > app-root > d1-loading-handler > app-site-layout > fieldflow-primary-layout > div > div > div > app-ticket-detail > d1-loading-handler > div > div > app-buy-tickets > ibm-placeholder > app-po-modal > ibm-modal > cds-overlay > section > div > div > ibm-table-container > ibm-tabs > ibm-tab > div > app-po-activities > div > div > table > tbody > tr > td:nth-child(2)', { timeout: 15000 })
    .should('exist')
    .as('activityRow');

  // Step 3: Wait for the element to be visible and click it
  cy.get('@activityRow')
    .should('be.visible')
    .click();

  // Step 4: Wait for checkboxes to appear
  cy.get('input[type="checkbox"]', { timeout: 15000 })
    .should('exist')
    .should('be.visible')
    .click({ force: true });

          // Step 5: Verify if checkbox is checked, if not, check it
          cy.get('input[type="checkbox"]').then($checkbox => {
            if (!$checkbox.prop('checked')) {
              cy.get('input[type="checkbox"]').check({ force: true });
            }
          });

  // Step 5: Enter "60" in the input field
  cy.get(':nth-child(7) > .ng-untouched', { timeout: 15000 })
    .should('exist')
    .should('be.visible')
    .clear()
    .type('60');


  // Step 6: Click the Save button
  cy.get("div[class='bx--col btn-wrapper'] button[class='cds--btn cds--btn--primary']", { timeout: 15000 })
    .should('exist') // Ensure the button exists in the DOM
    .should('be.visible') // Ensure the button is visible
    .click();

  // Step 7: Verify success message appears
  cy.get("div[aria-label='Success']", { timeout: 10000 }) 
    .should('be.visible');

  // // Step 8: Ensure success message disappears before proceeding
  // cy.get("div[aria-label='Success']", { timeout: 10000 }) 
  //   .should('not.exist');

  // //Step 9: Click Cancel
  // cy.get('div[class="bx--col btn-wrapper"] button[class="cds--btn cds--btn--secondary"]')
  // .should('be.visible')
  // .click();

  // //Step 10: Verify Total Authorized Cost: $60
  // cy.get('div[_ngcontent-ng-c596121706]')
  // .contains('$60.00')
  // .should('be.visible');

}
