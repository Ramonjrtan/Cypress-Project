import env from '../../cypress.env.json';

export function po_assigntech() {
  // Step 1: Click on PO Assignment tab
  cy.get(env.techpoTabButton)
    .contains('Assignment')
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Step 2: Wait until the "Purchase Order" page is fully loaded
  cy.contains(env.poPageHeader, 'Purchase Order', { timeout: 10000 })
    .should('be.visible');

  // Step 3: Click "Create Technician Assignment" button
  cy.get(env.createTechAssignmentButton)
    .should('be.visible')
    .click();


  // Step 4: Wait until the "Assign Technician" page is fully loaded
  cy.contains(env.assignTechHeader, 'Assign Technician', { timeout: 10000 })
    .should('be.visible');

  // cy.get('#tech-select > .loading-wrapper').should('not.exist'); // Wait until the loading spinner disappears
    
  // Wait until the radio button is visible
  cy.get(env.techRadioButton, { timeout: 180000 })
    .should('exist')
    .and('be.visible');

  // Step 5: Click the first radio button to select a technician
  cy.get(env.techRadioButton, { timeout: 30000 })
    .should('exist')
    .and('be.visible')
    .first()
    .click({ force: true });

  // Step 6: Click the "Finalize Assignment" button
  cy.get(env.finalizeAssignmentButton)
    .contains('Finalize Assignment')
    .scrollIntoView()
    .should('be.visible')
    .click();

  // Step 7: Verify success message appears
  cy.get(env.successAssignMessage, { timeout: 10000 })
    .should('be.visible');

  // Step 8: Ensure success message disappears before proceeding
  cy.get(env.successAssignMessage, { timeout: 10000 })
    .should('not.exist');

  // Step 9: Verify "Technician Assigned" section is visible
  cy.get(env.technicianAssignedSection)
    .contains('Technician Assigned')
    .should('be.visible');

  // Step 10: Click on "Purchase Order" breadcrumb to navigate back
  cy.get(env.breadcrumbToPO)
    .should('be.visible')
    .click();

  // Step 11: Wait until the "Add PO" section is visible
  cy.contains(env.addPOHeader, 'Add PO', { timeout: 10000 })
    .should('be.visible');
}
